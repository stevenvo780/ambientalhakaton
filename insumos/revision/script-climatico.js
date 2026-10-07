/**
 * Plugin Cambio Climático — script-climatico.js
 * Maneja: Swiper, tabs de categorías, subtabs, temática con filtros, documentos.
 * Todos los contenidos dinámicos se cargan por AJAX bajo demanda.
 */
jQuery(document).ready(function ($) {

  /* =========================================================================
   * UTILIDADES GLOBALES
   * ======================================================================= */

  // Mostrar spinner en un contenedor
  function showLoading($container) {
    $container.html('<div class="climatico-loading"><span class="climatico-spinner"></span></div>');
  }

  // Re-inicializar ChartBuilder sobre contenedor recién insertado por AJAX
  function initChartBuilder($container) {
    // Inicializar Chart.js si aplica
    if (typeof $.fn.ChartBuilderChartJsMain === 'function') {
      $container.find('.ays-chart-container-chartjs').each(function () {
        $(this).ChartBuilderChartJsMain();
      });
    }

    // Inicializar Google Charts si aplica
    if (typeof $.fn.ChartBuilderGoogleChartsMain === 'function') {
      $container.find('.ays-chart-container-google').each(function () {
        $(this).ChartBuilderGoogleChartsMain();
      });
    }

    // Google Charts y Chart.js calculan las dimensiones del contenedor en el momento
    // del draw()/new Chart(). Al insertarse vía AJAX el layout CSS aún no está
    // estabilizado, así que el gráfico queda con tamaño incorrecto.
    // Solución: esperamos el siguiente repaint y forzamos un redraw completo.
    requestAnimationFrame(function () {
      setTimeout(function () {

        // — Google Charts: volver a llamar loadChartBySource() para que redibuje SVG
        //   con las dimensiones reales del contenedor ya aplicadas.
        $container.find('.ays-chart-container-google').each(function () {
          var instance = $(this).data('ChartBuilderGoogleChartsMain');
          if (instance && typeof instance.loadChartBySource === 'function') {
            instance.loadChartBySource();
          }
        });

        // — Chart.js: llamar resize() directamente sobre el objeto Chart
        $container.find('.ays-chart-container-chartjs').each(function () {
          var instance = $(this).data('ChartBuilderChartJsMain');
          if (instance && instance.chartObject && typeof instance.chartObject.resize === 'function') {
            instance.chartObject.resize();
          }
        });

      }, 150);
    });
  }

  // Inicializar Swiper tipo bullet (mapa arriba, torta abajo) en un elemento ya en el DOM
  function initSwiperBullet($wrapper) {
    $wrapper.find('.swiper-categorias').each(function () {
      var el = this;
      // Buscar paginación dentro del mismo swiper
      var $pag = $(el).find('.swiper-pagination-cat');
      new Swiper(el, {
        loop: false,
        slidesPerView: 1,
        spaceBetween: 10,
        pagination: {
          el: $pag[0] || '.swiper-pagination-cat',
          type: 'bullets',
          clickable: true,
          dynamicBullets: true,
        },
      });
    });
  }

  /* =========================================================================
   * 2.2 CARRUSEL INDICADORES (carga estática, solo inicializar Swiper)
   * ======================================================================= */
  if ($('.swiper-climatico').length) {
    var climaticoSwiper = new Swiper('.swiper-climatico', {
      loop: true,
      slidesPerView: 1,
      navigation: {
        nextEl: '.swiper-climatico-next',
        prevEl: '.swiper-climatico-prev',
      },
      on: {
        init: function () {
          // Escalar cada imagen al cargarse
          $('.swiper-climatico .img-map[usemap]').each(function () {
            var $img = $(this);
            $img.on("load", function () {
              scaleMapAreas($img);
            });
            // Por si la imagen ya está cacheada
            if ($img[0].complete) {
              scaleMapAreas($img);
            }
          });

        },

        slideChangeTransitionEnd: function () {
          var $currentImg = $(this.slides[this.activeIndex]).find('img[usemap]');
          if ($currentImg.length) {
            scaleMapAreas($currentImg);
          }
        }
      }
    });

    climaticoSwiper.on('slideChange', function () {
      if (window.parent && typeof window.parent.getParametro !== 'undefined') {
        try {
          window.parent.getParametro = null;
        } catch (err) {
          console.warn('No se pudo asignar parent.getParametro = null:', err);
        }
      }
    });
  }

  //click en area
  $('.swiper-climatico').on('click', 'area[data-tarjeta-id]', function (e) {
    e.preventDefault();

    let tarjetaId = $(this).data('tarjeta-id');

    // Ocultar todas las tarjetas dentro del contenedor
    $('body').find('.tarjeta-seccion').hide();

    // Buscar si ya existe la tarjeta
    let $tarjeta = $('body').find('#tarjeta-' + tarjetaId);

    // Si ya existe, solo reposicionarla y mostrarla
    if ($tarjeta.length) {
      posicionarTarjeta($tarjeta, e);
      return;
    }

    // Si no existe, pedirla por AJAX
    $.post(climaticoAjax.url, {
      action: 'get_shortcode_tarjeta',
      id: tarjetaId
    }, function (row) {
      if (row && row.id) {
        let $nuevaTarjeta = $(
          '<div class="tarjeta-seccion" id="tarjeta-' + row.id + '" style="display:none;">' +
          '<div class="titulo-riesgo">' + (row.titulo || '') + '</div>' +
          '<img class="icon-riesgo" src="' + (row.info3 || '') + '">' +
          '</div>'
        );

        $('body').append($nuevaTarjeta);

        // posicionar la nueva tarjeta al click
        posicionarTarjeta($nuevaTarjeta, e);
      }
    }, 'json');
  });

  // Función para posicionar la tarjeta justo en el click
  function posicionarTarjeta($tarjeta, e) {
    // Ocultar para medir y luego mostrar
    $tarjeta.css({
      visibility: 'hidden',
      position: 'absolute',
      top: '-9999px',
      left: '-9999px',
      display: 'flex'
    });

    const tarjetaWidth = $tarjeta.outerWidth();
    const tarjetaHeight = $tarjeta.outerHeight();
    const windowWidth = $(window).width();
    const windowHeight = $(window).height();
    const scrollY = window.scrollY;

    let top = e.pageY + 10;
    let left = e.pageX + 10;

    // Ajustar si se sale por la derecha
    if (left + tarjetaWidth > windowWidth) {
      left = windowWidth - tarjetaWidth - 10;
    }

    // Ajustar si se sale por abajo
    if (top - scrollY + tarjetaHeight > windowHeight) {
      top = e.pageY - tarjetaHeight - 10;
    }

    // Ajustar si se sale por la izquierda o arriba
    if (left < 0) left = 10;
    if (top < scrollY) top = scrollY + 10;

    $tarjeta.css({
      top: top,
      left: left,
      zIndex: 9999,
      visibility: 'visible'
    }).stop(true, true).fadeIn(150);
  }

  //Click afuera y cierra tarjeta
  $(document).on('click', function (e) {
    if ($(e.target).closest('area[data-tarjeta-id], .tarjeta-seccion').length === 0) {
      $('.tarjeta-seccion:visible').fadeOut();
    }
  });

  function scaleMapAreas($img) {
    var originalWidth = parseInt($img.attr('data-original-width'), 10);
    var originalHeight = parseInt($img.attr('data-original-height'), 10);
    var displayedWidth = $img.width();
    var displayedHeight = $img.height();
    var scaleX = displayedWidth / originalWidth;
    var scaleY = displayedHeight / originalHeight;

    if (displayedHeight === 0 || displayedWidth === 0) {
      return;
    }

    var mapName = $img.attr('usemap');
    if (!mapName) return;
    mapName = mapName.replace('#', '');
    var $map = $('map[name="' + mapName + '"]');
    if ($map.length === 0) return;

    $map.find('area').each(function () {
      var $area = $(this);
      var originalCoords = $area.data('original-coords');
      if (!originalCoords) {
        originalCoords = $area.attr('coords');
        $area.data('original-coords', originalCoords);
      }
      var coords = originalCoords.split(',').map(Number);
      var newCoords = [];
      for (var i = 0; i < coords.length; i += 2) {
        newCoords.push(Math.round(coords[i] * scaleX));
        newCoords.push(Math.round(coords[i + 1] * scaleY));
      }
      $area.attr('coords', newCoords.join(','));
    });
  }

  /* =========================================================================
   * 2.3 CATEGORÍAS (Amenaza / Vulnerabilidad / Riesgo) — AJAX
   * ======================================================================= */

  var catActiva = null;
  var subcatActiva = null;
  var catCargando = false;

  // ── Tooltip / Modal info ──────────────────────────────────────────────────
  $(document).on('click', '.climatico-cat-info-btn', function (e) {
    e.stopPropagation();
    var desc = $(this).data('desc') || '';
    var color = $(this).data('color');
    var textColor = $(this).data('text') || '#000000';
    var img = $(this).data('img') || '';
    $('#climatico-cat-tooltip-text').text(desc);
    $('#climatico-cat-tooltip').css('background', color);
    $('#climatico-cat-tooltip-text').css('color', textColor);
    if (img) {
      $('#climatico-cat-tooltip-img').attr('src', img).show();
    } else {
      $('#climatico-cat-tooltip-img').hide();
    }
    $('#climatico-cat-tooltip').fadeIn(180);
  });

  $(document).on('click', '#climatico-cat-tooltip-close', function () {
    $('#climatico-cat-tooltip').fadeOut(180);
  });

  // Cerrar al hacer click fuera del tooltip
  $(document).on('click', function (e) {
    if (!$(e.target).closest('#climatico-cat-tooltip, .climatico-cat-info-btn').length) {
      $('#climatico-cat-tooltip').fadeOut(180);
    }
  });

  // ── Click en tab principal de categoría ──────────────────────────────────
  $(document).on('click', '.climatico-cat-tab', function () {
    var cat = $(this).data('cat');

    // No hacer nada si ya está activa y no es Vulnerabilidad
    if (cat === catActiva && cat !== 'Vulnerabilidad') return;
    // Si es Vulnerabilidad y ya está activa (ya tiene subtabs mostradas) no recargar
    if (cat === catActiva && cat === 'Vulnerabilidad') return;

    // Actualizar estado visual de tabs
    $('.climatico-cat-tab').removeClass('active');
    $(this).addClass('active');
    catActiva = cat;
    subcatActiva = null;

    cargarCategoria(cat, '');
  });

  // ── Click en subtab (solo Vulnerabilidad) ────────────────────────────────
  $(document).on('click', '.climatico-subtab', function () {
    var sub = $(this).data('subtab');

    // No recargar si ya está activa
    if (sub === subcatActiva) return;

    $('.climatico-subtab').removeClass('active');
    $(this).addClass('active');
    subcatActiva = sub;

    cargarSubcategoria(sub);
  });

  // ── Carga principal de categoría ─────────────────────────────────────────
  function cargarCategoria(cat, sub) {
    if (catCargando) return;
    catCargando = true;

    var $contenedor = $('#climatico-cat-content');
    showLoading($contenedor);

    $.post(climaticoAjax.url, {
      action: 'climatico_cargar_categoria',
      nonce: climaticoAjax.nonce,
      categoria: cat,
      subcategoria: sub,
    }, function (res) {
      catCargando = false;
      if (res.success) {
        $contenedor.html(res.data.html);

        // Ejecutar el JS inline del ChartBuilder (aysChartOptions{id}) antes de
        // inicializar el gráfico, para que los datos estén en window.
        if (res.data.scripts) {
          try { $.globalEval(res.data.scripts); } catch (e) { console.warn('ChartBuilder scripts error:', e); }
        }

        if (res.data.tipo === 'carrusel') {
          // Amenaza / Riesgo → carrusel bullet directo
          initSwiperBullet($contenedor);
          initChartBuilder($contenedor);

        } else if (res.data.tipo === 'subtabs') {
          // Vulnerabilidad → activar primera subtab automáticamente
          var $primera = $contenedor.find('.climatico-subtab').first();
          if ($primera.length) {
            $primera.trigger('click');
          }
        }
      } else {
        $contenedor.html('<p class="climatico-error">Error al cargar el contenido.</p>');
      }
    }).fail(function () {
      catCargando = false;
      $('#climatico-cat-content').html('<p class="climatico-error">Error de conexión.</p>');
    });
  }

  // ── Carga de carrusel para una subcategoría (Vulnerabilidad) ─────────────
  var subcatCargando = false;

  function cargarSubcategoria(sub) {
    if (subcatCargando) return;
    subcatCargando = true;

    var $contenedor = $('#climatico-subcat-content');
    showLoading($contenedor);

    $.post(climaticoAjax.url, {
      action: 'climatico_cargar_categoria',
      nonce: climaticoAjax.nonce,
      categoria: 'Vulnerabilidad',
      subcategoria: sub,
    }, function (res) {
      subcatCargando = false;
      if (res.success) {
        $contenedor.html(res.data.html);

        // Ejecutar el JS inline del ChartBuilder para subcategorías
        if (res.data.scripts) {
          try { $.globalEval(res.data.scripts); } catch (e) { console.warn('ChartBuilder scripts error:', e); }
        }

        initSwiperBullet($contenedor);
        initChartBuilder($contenedor);
      } else {
        $contenedor.html('<p class="climatico-error">Error al cargar el contenido.</p>');
      }
    }).fail(function () {
      subcatCargando = false;
      $('#climatico-subcat-content').html('<p class="climatico-error">Error de conexión.</p>');
    });
  }

  // Activar primer tab de categorías al cargar la página
  $('.climatico-cat-tab').first().trigger('click');

  /* =========================================================================
   * 2.4 TEMÁTICA INFORMACIÓN — AJAX con filtros
   * ======================================================================= */

  var tematicaActiva = null;
  var filtrosSubregion = '';
  var filtrosDimension = '';
  var filtrosIndice = '';
  var filtrosEscenario = '';
  var filtrosYear = '';
  var tematicaCargando = false;
  var tematicasDescripciones = {
    'Adaptación': 'La adaptación corresponde al conjunto de acciones, políticas y medidas orientadas a reducir la vulnerabilidad y el riesgo frente a los efectos del cambio climático. En la jurisdicción CORNARE, la adaptación se materializa en instrumentos de planificación, proyectos territoriales, medidas sectoriales y acciones implementadas por municipios, empresas y comunidades.'
  };

  // Función para actualizar el estado de habilitación de los filtros
  function actualizarEstadoFiltros() {
    var subregion = $('#climatico-sel-subregion').val();
    var indice = $('#climatico-sel-indice').val();
    var year = $('#climatico-sel-año').val();

    // Habilitar/deshabilitar indice según si hay subregion seleccionada
    if (subregion) {
      $('#climatico-sel-indice').prop('disabled', false);
    } else {
      $('#climatico-sel-indice').prop('disabled', true).val('');
      $('#climatico-sel-dimension').prop('disabled', true).val('');
      $('#climatico-sel-escenario').prop('disabled', true).val('Referencia');
      $('#climatico-sel-año').prop('disabled', true).val('2026');
    }

    // Habilitar/deshabilitar dimension, escenario y año según si hay indice seleccionado
    if (indice && subregion) {
      $('#climatico-sel-dimension').prop('disabled', false);
      
      // Si el índice es Vulnerabilidad, deshabilitar escenario y año
      if (indice === 'Vulnerabilidad') {
        $('#climatico-sel-escenario').prop('disabled', true).val('Referencia');
        $('#climatico-sel-año').prop('disabled', true).val('2026');
        filtrosEscenario = 'Referencia';
        filtrosYear = '2026';
      } else {
        // Si año es 2026, deshabilitar escenario en Referencia
        if (year === '2026') {
          $('#climatico-sel-escenario').find('option[value="Referencia"]').show();
          $('#climatico-sel-escenario').prop('disabled', true).val('Referencia');
          filtrosEscenario = 'Referencia';
        } else {
          // Si año es otro, habilitar escenario
          $('#climatico-sel-escenario').prop('disabled', false);
          $('#climatico-sel-escenario').find('option[value="Referencia"]').hide();
          // Solo establecer SSP1 si el escenario está vacío o es "Referencia" (no sobrescribir la selección del usuario)
          var escenarioActual = $('#climatico-sel-escenario').val();
          if (!escenarioActual || escenarioActual === 'Referencia') {
            $('#climatico-sel-escenario').val('SSP1').trigger('change');
          }
        }
        $('#climatico-sel-año').prop('disabled', false);
      }
    } else {
      $('#climatico-sel-dimension').prop('disabled', true).val('');
      $('#climatico-sel-escenario').prop('disabled', true).val('Referencia');
      $('#climatico-sel-año').prop('disabled', true).val('2026');
    }
  }

  // Click en tab temática
  $(document).on('click', '.climatico-tematica-tab', function () {
    var tem = $(this).data('tematica');

    $('.climatico-tematica-tab').removeClass('active');
    $(this).addClass('active');

    if (tematicasDescripciones[tem]) {
      $('.climatico-tematica-desc').show();
      $('.climatico-tematica-desc p').html(tematicasDescripciones[tem]);
    } else {
      $('.climatico-tematica-desc').hide();
    }

    tematicaActiva = tem;
    // Resetear filtros al cambiar tab
    filtrosSubregion = '';
    filtrosDimension = '';
    filtrosIndice = '';
    filtrosEscenario = 'Referencia';
    filtrosYear = '2026';
    $('#climatico-sel-subregion').val('');
    $('#climatico-sel-indice').val('').prop('disabled', true);
    $('#climatico-sel-dimension').val('').prop('disabled', true);
    $('#climatico-sel-escenario').val('Referencia').prop('disabled', true);
    $('#climatico-sel-año').val('2026').prop('disabled', true);

    $('.climatico-tematica-filtros').show();
    $('#climatico-sel-subregion').prop('selectedIndex', 1).trigger('change');
    $('#climatico-sel-indice').prop('selectedIndex', 1).trigger('change');
    $('.climatico-doc-tab').first().trigger('click');
  });

  // Cambio en filtro de SUBREGIÓN
  $(document).on('change', '#climatico-sel-subregion', function () {
    if (!tematicaActiva) return;

    var nuevaSubregion = $(this).val();

    // Resetear filtros dependientes
    $('#climatico-sel-indice').val('').prop('disabled', false);
    $('#climatico-sel-dimension').val('').prop('disabled', true);
    $('#climatico-sel-escenario').val('Referencia').prop('disabled', true);
    $('#climatico-sel-año').val('2026').prop('disabled', false);

    filtrosSubregion = nuevaSubregion;
    filtrosIndice = '';
    filtrosDimension = '';
    filtrosEscenario = 'Referencia';
    filtrosYear = '2026';

    actualizarEstadoFiltros();
  });

  // Cambio en filtro de ÍNDICE - Ejecuta consulta cuando se selecciona
  $(document).on('change', '#climatico-sel-indice', function () {
    if (!tematicaActiva) return;

    var nuevaIndice = $(this).val();
    var year = $('#climatico-sel-año').val();

    // Habilitar dimension (opcional)
    $('#climatico-sel-dimension').val('').prop('disabled', false);
    
    // Resetear escenario y año según el índice y año
    if (nuevaIndice === 'Vulnerabilidad') {
      $('#climatico-sel-escenario').val('Referencia').prop('disabled', true);
      $('#climatico-sel-año').val('2026').prop('disabled', true);
      filtrosEscenario = 'Referencia';
      filtrosYear = '2026';
    } else {
      // Si año es 2026, deshabilitar escenario
      if (year === '2026') {
        $('#climatico-sel-escenario').val('Referencia').prop('disabled', true);
        filtrosEscenario = 'Referencia';
      } else {
        $('#climatico-sel-escenario').prop('disabled', false);
        filtrosEscenario = $('#climatico-sel-escenario').val();
      }
      filtrosYear = year;
    }

    filtrosIndice = nuevaIndice;
    filtrosDimension = '';

    actualizarEstadoFiltros();

    // Ejecutar consulta cuando se selecciona índice (dimension es opcional)
    if (filtrosSubregion && filtrosIndice) {
      cargarTematica();
    }
  });

  // Cambio en filtro de ESCENARIO
  $(document).on('change', '#climatico-sel-escenario', function () {
    if (!tematicaActiva) return;

    var nuevoEscenario = $(this).val();

    filtrosEscenario = nuevoEscenario;

    // Ejecutar consulta cuando se selecciona escenario
    if (filtrosSubregion && filtrosIndice) {
      cargarTematica();
    }
    
    actualizarEstadoFiltros();
  });

  // Cambio en filtro de AÑO
  $(document).on('change', '#climatico-sel-año', function () {
    if (!tematicaActiva) return;

    var nuevoYear = $(this).val();

    filtrosYear = nuevoYear;
    
    // Actualizar estado del escenario según el año
    actualizarEstadoFiltros();

    // Ejecutar consulta cuando se selecciona año
    if (filtrosSubregion && filtrosIndice) {
      cargarTematica();
    }
  });

  // Cambio en filtro de DIMENSIÓN - Recarga consulta (dimension es opcional)
  $(document).on('change', '#climatico-sel-dimension', function () {
    if (!tematicaActiva) return;

    var nuevaDim = $(this).val();

    filtrosDimension = nuevaDim;

    // Ejecutar consulta cuando cambia dimensión (solo requiere subregion e indice)
    if (filtrosSubregion && filtrosIndice) {
      cargarTematica();
    }

    actualizarEstadoFiltros();
  });

  function cargarTematica() {
    if (tematicaCargando || !tematicaActiva) return;
    tematicaCargando = true;

    var $contenedor = $('#climatico-tablero-content');
    showLoading($contenedor);

    $.post(climaticoAjax.url, {
      action: 'climatico_cargar_tematica',
      nonce: climaticoAjax.nonce,
      tematica: tematicaActiva,
      subregion: filtrosSubregion,
      dimension: filtrosDimension,
      indice: filtrosIndice,
      escenario: filtrosEscenario,
      year: filtrosYear,
    }, function (res) {
      tematicaCargando = false;
      if (res.success) {
        $contenedor.html(res.data.html);
        window.parent.getParametro = null;
      } else {
        $contenedor.html('<p class="climatico-error">Error al cargar los datos.</p>');
      }
    }).fail(function () {
      tematicaCargando = false;
      $('#climatico-tablero-content').html('<p class="climatico-error">Error de conexión.</p>');
    });
  }

  /* =========================================================================
   * 2.5 DOCUMENTOS — AJAX por tipo
   * ======================================================================= */

  var docCargando = false;

  $(document).on('click', '.climatico-doc-tab', function () {
    var fase = $(this).data('fase');
    let tematica = $('.climatico-tematica-tab.active').data('tematica');
    let fases = $('.climatico-doc-tabs').find('.climatico-tab-icon');
    // Cambiar iconos de tabs
    $(fases).each(function () {
      var $icon = $(this);
      $icon.attr('src', $icon.data('inactive'));
    });
    $(this).find('.climatico-tab-icon').attr('src', $(this).find('.climatico-tab-icon').data('active'));


    $('.climatico-doc-tab').removeClass('active');
    $(this).addClass('active');

    cargarDocumentos(fase, tematica);
  });

  // ── Tabs de carpetas (sidebar) ──────────────────────────────────────
  $(document).on('click', '.carpeta-btn', function () {
    var tabName = $(this).data('tab');
    var tipos = $(this).data('tipos') || ''; // ej: "Documentos,Matrices"

    // Actualizar activo en sidebar
    $('.carpeta-btn').removeClass('active');
    $(this).addClass('active');

    // Mostrar/ocultar tabs según tipos disponibles en esta carpeta
    var tiposArray = tipos.split(',').map(function(t) { return t.trim(); });
    $('.tab-btn').hide();
    tiposArray.forEach(function(tipo) {
      $('.tab-btn[data-tab="' + tipo + '"]').show();
    });

    // Seleccionar el primer tab disponible para esta carpeta
    var firstAvailableTab = $('.tab-btn:visible').first().data('tab');
    if (firstAvailableTab) {
      showTabContent(tabName, firstAvailableTab);
      $('.tab-btn[data-tab="' + firstAvailableTab + '"]').addClass('active');
      $('.tab-btn:not([data-tab="' + firstAvailableTab + '"])').removeClass('active');
    }
  });

  // ── Tabs de tipo (Documentos / Matrices) ─────────────────────────────
  $(document).on('click', '.tab-btn', function () {
    var tabType = $(this).data('tab');

    // Actualizar activo en tabs
    $('.tab-btn').removeClass('active');
    $(this).addClass('active');

    // Mostrar contenido de la carpeta activa con este tipo
    var activeCarpeta = $('.carpeta-btn.active').data('tab');
    showTabContent(activeCarpeta, tabType);
  });

  // Función para mostrar el contenido correcto
  function showTabContent(carpeta, tipo) {
    $('.contenido-tab').hide().css('display', 'none');
    var targetId = carpeta + '-' + tipo;
    $('#' + targetId).css({
      'display': 'grid',
      'grid-template-columns': 'repeat(auto-fill, minmax(250px, 1fr))',
      'gap': '1rem',
      'max-height': '600px',
      'overflow-y': 'auto',
      'padding': '5px'
    });
  }

  // Inicializar primera tab al cargar documentos
  var docContainerInitialized = false;
  // Observar cuando se carga el AJAX de documentos
  var observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
      if (mutation.addedNodes.length) {
        $(mutation.addedNodes).each(function() {
          if ($(this).find('.contenedor-principal-sidebar').length || $(this).hasClass('contenedor-principal-sidebar')) {
            if (!docContainerInitialized) {
              // Disparar clic en primera carpeta para inicializar tabs
              $('.carpeta-btn').first().trigger('click');
              docContainerInitialized = true;
            }
          }
        });
      }
    });
  });

  observer.observe($('#climatico-docs-content')[0] || document.body, {
    childList: true,
    subtree: true
  });

  function cargarDocumentos(fase, tematica) {
    if (docCargando) return;
    docCargando = true;

    var $contenedor = $('#climatico-docs-content');
    showLoading($contenedor);

    $.post(climaticoAjax.url, {
      action: 'climatico_cargar_documentos',
      nonce: climaticoAjax.nonce,
      fase: fase,
      tematica: tematica,
    }, function (res) {
      docCargando = false;
      if (res.success) {
        $contenedor.html(res.data.html);
        $('.carpeta-btn').first().trigger('click');
      } else {
        $contenedor.html('<p class="climatico-error">Error al cargar documentos.</p>');
      }
    }).fail(function () {
      docCargando = false;
      $('#climatico-docs-content').html('<p class="climatico-error">Error de conexión.</p>');
    });
  }

  // Activar primer tab de temáticas al cargar
  $('.climatico-tematica-tab').first().trigger('click');

  $(document).on('click', '.btn-burguer', function () { 
    const section = $(this).closest('.contenedor-principal-sidebar');
    section.find('.sidebar').toggleClass('show');
  });



  /* =========================================================================
   * ADMIN — Media Uploader (upload_image buttons)
   * ======================================================================= */

  if (typeof wp !== 'undefined' && wp.media) {
    $(document).on('click', '.upload_image', function (e) {
      e.preventDefault();
      var target = $(this).data('target');
      var mediaUploader = wp.media({
        title: 'Seleccionar archivo',
        button: { text: 'Usar este archivo' },
        multiple: false
      });
      mediaUploader.on('select', function () {
        var attachment = mediaUploader.state().get('selection').first().toJSON();
        $(target).val(attachment.url);
      });
      mediaUploader.open();
    });
  }

  /* =========================================================================
   * ADMIN — Select condicional subcategoría (fallback si no carga inline)
   * ======================================================================= */

  $(document).on('change', '#categoria_id', function () {
    var val = $(this).val();
    var $row = $('#row-subcategoria');
    if (val === 'Vulnerabilidad') {
      $row.show();
      $('#subcategoria_id').prop('required', true);
    } else {
      $row.hide();
      $('#subcategoria_id').prop('required', false).val('');
    }
  });

});
