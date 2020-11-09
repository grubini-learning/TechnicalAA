var TransactionListView = Backbone.View.extend({

  initialize: function() {
    this.render();
  },

  className: 'txn',
  
  render: function() {
    this.$el.html(this.template);
    return this.$el;
  },

  template: `
    <h3>Transactions</h3>
    <div class="txn-table">
      <div class="txn-header txn-row">
        <div class="txn-data">Date</div>
        <div class="txn-data">Description</div>
        <div class="txn-data">Amount</div>
      </div>
      <div class="txn-row">
        <div class="txn-data">2017-08-02</div>
        <div class="txn-data">EQUATOR</div>
        <div class="txn-data">-4.00</div>
      </div>
      <div class="txn-row">
        <div class="txn-data">2017-08-02</div>
        <div class="txn-data">CHIPOTLE</div>
        <div class="txn-data">-9.19</div>
      </div>
      <div class="txn-row">
        <div class="txn-data">2017-08-03</div>
        <div class="txn-data">BLUE BOTTLE</div>
        <div class="txn-data">-13.29</div>
      </div>
    </div>
  `

});
