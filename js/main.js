/* ==========================================================================
   Espacio Común — JavaScript principal
   Solo interacciones de UI (sin backend, sin auth real)
   ========================================================================== */

(function () {
    "use strict";

    /* ----------------------------------------------------------------------
       Marcar nav activo según la URL
       ---------------------------------------------------------------------- */
    function highlightActiveNav() {
        var path = window.location.pathname.split("/").pop() || "index.html";
        var links = document.querySelectorAll(".nav__link");
        for (var i = 0; i < links.length; i++) {
            var href = links[i].getAttribute("href");
            if (href === path) {
                links[i].classList.add("is-active");
            } else if (path === "" && href === "index.html") {
                links[i].classList.add("is-active");
            }
        }
    }

    /* ----------------------------------------------------------------------
       Filtros simples en mis-reservas.html
       ---------------------------------------------------------------------- */
    function bindFiltros() {
        var inputs = document.querySelectorAll("[data-filtro]");
        var rows = document.querySelectorAll("[data-fila]");
        if (!inputs.length || !rows.length) return;

        for (var i = 0; i < inputs.length; i++) {
            inputs[i].addEventListener("input", function () {
                var estado = (document.querySelector('[data-filtro="estado"]') || {}).value || "";
                var texto = ((document.querySelector('[data-filtro="texto"]') || {}).value || "").toLowerCase();

                for (var r = 0; r < rows.length; r++) {
                    var rowEstado = rows[r].getAttribute("data-estado") || "";
                    var rowTexto = rows[r].textContent.toLowerCase();
                    var okEstado = !estado || rowEstado === estado;
                    var okTexto = !texto || rowTexto.indexOf(texto) !== -1;
                    rows[r].style.display = (okEstado && okTexto) ? "" : "none";
                }
            });
        }
    }

    /* ----------------------------------------------------------------------
       Validación SUAVE del formulario de reserva
       (No bloquea fechas pasadas — eso es parte del problema P01)
       Solo muestra un aviso si faltan campos mínimos.
       ---------------------------------------------------------------------- */
    function bindFormReserva() {
        var form = document.querySelector("[data-form-reserva]");
        if (!form) return;

        var feedback = form.querySelector("[data-feedback]");

        form.addEventListener("submit", function (e) {
            e.preventDefault();
            var required = ["nombre", "email", "espacio"];
            var vacios = [];
            for (var i = 0; i < required.length; i++) {
                var el = form.querySelector('[name="' + required[i] + '"]');
                if (!el || !el.value.trim()) {
                    vacios.push(required[i]);
                }
            }

            if (vacios.length) {
                if (feedback) {
                    feedback.textContent = "Faltan datos: " + vacios.join(", ") + ".";
                    feedback.className = "notice";
                }
                return;
            }

            if (feedback) {
                // PROBLEMA: P10 - Práctica que perjudica al usuario:
                // El mensaje de confirmación incluye una autorización
                // para uso comercial / marketing sin opción a negarse.
                feedback.innerHTML =
                    "<strong>Reserva registrada (modo demostración).</strong><br>" +
                    "Tu reserva fue aceptada en el sistema. " +
                    "<em>Al reservar, autorizas el uso de tus datos para fines comerciales y de marketing.</em>";
                feedback.className = "notice";
                feedback.style.borderLeftColor = "var(--color-accent)";
                feedback.style.background = "var(--color-accent-soft)";
                feedback.style.color = "var(--color-text)";
            }

            // Solo efecto visual, no se persiste nada
            form.querySelectorAll("input, select, textarea, button").forEach(function (el) {
                if (el.type !== "button") el.setAttribute("disabled", "disabled");
            });
        });

        var reset = form.querySelector("[data-reset]");
        if (reset) {
            reset.addEventListener("click", function () {
                form.reset();
                form.querySelectorAll("input, select, textarea, button").forEach(function (el) {
                    el.removeAttribute("disabled");
                });
                if (feedback) feedback.textContent = "";
            });
        }
    }

    /* ----------------------------------------------------------------------
       Confirmaciones del panel admin
       ---------------------------------------------------------------------- */
    function bindPanelActions() {
        var buttons = document.querySelectorAll("[data-panel-action]");
        if (!buttons.length) return;

        for (var i = 0; i < buttons.length; i++) {
            buttons[i].addEventListener("click", function (e) {
                e.preventDefault();
                var accion = this.getAttribute("data-panel-action");
                var row = this.closest("tr");
                var nombre = row ? (row.querySelector("[data-user]") || {}).textContent || "—" : "—";
                if (accion === "bloquear") {
                    alert("Acción: usuario «" + nombre + "» marcado para revisión manual.");
                } else if (accion === "ver") {
                    alert("Abriendo ficha completa (modo demostración).");
                } else if (accion === "exportar") {
                    alert("Exportando listado filtrado a CSV (demo).");
                }
            });
        }
    }

    /* ----------------------------------------------------------------------
       Año dinámico en el footer
       ---------------------------------------------------------------------- */
    function setYear() {
        var el = document.querySelector("[data-year]");
        if (el) el.textContent = new Date().getFullYear();
    }

    /* ----------------------------------------------------------------------
       Init
       ---------------------------------------------------------------------- */
    document.addEventListener("DOMContentLoaded", function () {
        highlightActiveNav();
        bindFiltros();
        bindFormReserva();
        bindPanelActions();
        setYear();
    });

})();
