(() => {
  // ../frontend/frontend/public/js/client_scripts/doctor_sheduler_unit.bundle.js
  frappe.ui.form.on("Practitioner Service Unit Schedule", {
    practitioner_schedules_add: function(frm) {
      frm.set_query("service_unit", "practitioner_schedules", function() {
        return {
          filters: {
            is_group: 1
          }
        };
      });
    }
  });
})();
//# sourceMappingURL=doctor_sheduler_unit.bundle.F3BAYWGX.js.map
