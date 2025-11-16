class InventoryPage {
  async getTitleText() {
    return this.headerTitle.getText();
  }
  get headerTitle() {
    return $('//div[contains(@class, "app_logo")]');
  }
}

module.exports = new InventoryPage();
