import 'whatwg-fetch';

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  } else {
    var error = new Error(response.statusText);
    error.response = response;
    throw error;
  }
}

function parseJSON(response) {
  return response.json();
}

const fetchJSON = function(dataSrc) {
  fetch(dataSrc)
  .then(checkStatus)
  .then(parseJSON)
  .then(function(data) {
    console.log('success: ', data);
    console.log(data.bonsai);
  }).catch(function(error) {
    console.log('request failed', error);
  });
};

export {fetchJSON};