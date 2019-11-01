var windowObjectReference;
var strWindowFeatures = "menubar=yes,incognito=yes,resizable=yes,scrollbars=yes,status=yes";

function openRequestedPopup(strUrl) {
  windowObjectReference = window.open(strUrl, "HOME", strWindowFeatures);
}