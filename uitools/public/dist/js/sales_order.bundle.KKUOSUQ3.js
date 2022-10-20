(() => {
  // ../frontend/frontend/public/js/client_scripts/sales_order.bundle.js
  frappe.ui.form.on("Sales Order", {
    refresh: function(frm) {
      frm.set_df_property("items", "read_only", 1);
    }
  });
})();
//# sourceMappingURL=sales_order.bundle.KKUOSUQ3.js.map
