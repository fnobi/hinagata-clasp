interface SlackPayload {
    icon_emoji: string;
    text: string;
    username: string;
}

function sendToSlack(url: string, payload: SlackPayload): GoogleAppsScript.URL_Fetch.HTTPResponse {
    return UrlFetchApp.fetch(url, {
        contentType: "application/json",
        method: "post",
        payload: JSON.stringify(payload),
    });
}
