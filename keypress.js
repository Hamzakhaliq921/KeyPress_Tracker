 const place = document.getElementById("insert");

    const keyHistory = [];

    document.addEventListener("keydown", function (e) {
      const keyName = e.key === " " ? "Space" : e.key;

      keyHistory.push(keyName);

      place.innerHTML = `
        <div class="hint">Key Pressed</div>

        <table>
          <tr>
            <th>Key</th>
            <th>KeyCode</th>
            <th>Code</th>
          </tr>
          <tr>
            <td>${keyName}</td>
            <td>${e.keyCode}</td>
            <td>${e.code}</td>
          </tr>
        </table>

        <div class="history">
          <h3> Key History</h3>
          <div class="history-box">
            ${keyHistory.map(k => `<span class="key-chip">${k}</span>`).join("")}
          </div>
        </div>
      `;
    });
