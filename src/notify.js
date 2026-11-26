export const notify = (type) => {
  const params = new URLSearchParams(window.location.search);

  // open yoursite.com/?owner=1 once on your own devices so you are never notified about yourself
  if (params.get("owner") === "1") localStorage.setItem("owner", "true");
  if (localStorage.getItem("owner") === "true") return;

  // skip local testing
  if (window.location.hostname === "localhost") return;

  // only one "visit" notification per browser session
  if (type === "visit") {
    if (sessionStorage.getItem("visitNotified")) return;
    sessionStorage.setItem("visitNotified", "1");
  }

  fetch("/api/notify", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      type,
      ref: params.get("ref"),
      referrer: document.referrer,
    }),
    keepalive: true, // still sends even if the resume tab opens
  }).catch(() => {});
};