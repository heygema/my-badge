function getTemplate(twitterHandle, twitterURL) {
  return [
    "",
    '<div class="list">',
    "</div>",
    '<div id="gema-badge-wrapper">',
    '    <div id="gema-badge">',
    "    ",
    '      <div class="gema-badge-item" id="badge-title-container">',
    '        <span id="gema-badge-credit">by <a href="' +
      twitterURL +
      '" target="_blank">' +
      twitterHandle +
      "</></span>",
    "      </div>",
    "",
    "  </div>",
    "</div>",
    "  <style>",
    "    #gema-badge-wrapper {",
    "    position: fixed;",
    "    bottom: 0;",
    "    width: 100%;",
    "    display: flex;",
    "    flex-direction: row;",
    "    background-color: transparent;",
    "    justify-content: flex-end;",
    "}",
    "#gema-badge {",
    "  display: flex;",
    "  flex-direction: row;",
    "  justify-content: center;",
    "  align-items: center;",
    "  height: 20px;",
    "  width: 155px;",
    "  border-top-left-radius: 5px;",
    "  border-top-right-radius: 5px;",
    "  padding: 6px 6px 4px 6px;",
    "  background-color: #1D1E22;",
    "  margin-right: 30px;",
    "}",
    "#badge-title-container {",
    "  flex: 3.5;",
    "/*   background-color: blue; */",
    "  justify-content: center;",
    "  align-items: center;",
    "}",
    ".gema-badge-item {",
    "  display: flex;",
    "/*   flex-direction: column; */",
    "  justify-content: center;",
    "  align-items: center;",
    "}",
    "#badge-avatar-container {",
    "  flex: 1;",
    "}",
    "#gema-badge-credit {",
    "  font-family: Sans-Serif;",
    "  color: #EEEEEE;",
    "  font-weight: bold;",
    "}",
    "#gema-badge-credit a {",
    "  color: #EEEEEE;",
    "  text-decoration: none;",
    "}",
    "#gema-badge-avatar {",
    "/*   background-color: green; */",
    "  border-radius: 50%;",
    "/*   background-size: cover; */",
    "  width: 22px;",
    "  height: 22px;",
    "  background-color: #0423F7;",
    "  background-size: cover;",
    "  background-repeat: no-repeat;",
    "}",
    "</style>",
    "",
  ];
}

function myBadge(handle, url) {
  var htmlStuff = getTemplate(handle, url);
  if (document) {
    document.body.innerHTML += htmlStuff.join("\n");
  }
}

module.exports = myBadge;
