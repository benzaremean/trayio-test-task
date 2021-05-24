export function actionable(element: WebdriverIO.Element): WebdriverIO.Element {
    const timeout = 10000;
    element.waitForExist({ timeout});
    element.waitForDisplayed({ timeout});
    element.waitForEnabled({ timeout});
    element.waitForClickable({ timeout});
    return element
}

export function visible(element: WebdriverIO.Element): WebdriverIO.Element {
    const timeout = 10000;
    element.waitForExist({ timeout});
    element.waitForDisplayed({ timeout});
    return element
}