describe("Change Text Behavior Test", () => {
  it("change text in the same activity", async () => {
    const sessionInfo = await browser.getSession();
    console.log("sessionInfo", sessionInfo);

    const editText = await browser.$("id=editTextUserInput");
    await editText.setValue("Espresso!");

    const button = await browser.$("id=changeTextBt");
    button.click();

    const textView = await browser.$("id=textToBeChanged");
    const value = await textView.getText();
    assert.strictEqual(value, "Espresso!");
  });

  it("change text in a new activity", async function () {
    const editText = await browser.$("id=editTextUserInput");
    await editText.setValue("Espresso!");

    const button = await browser.$("id=activityChangeTextBtn");
    button.click();

    const textView = await browser.$("id=show_text_view");
    const value = await textView.getText();
    assert.strictEqual(value, "Espresso!");
  });
});
