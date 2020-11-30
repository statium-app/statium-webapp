const client = (endpoint, customConfig = {}) => {
  const config = {
    method: 'GET',
    headers: {
      'X-Auth-Token': process.env.REACT_APP_FOOTBALL_DATA_API_AUTH_TOKEN,
    },
    ...customConfig,
  }

  return window
    .fetch(`${process.env.REACT_APP_FOOTBALL_DATA_API_BASE_URL}/${endpoint}`, config)
    .then(response => response.json())
}

export {client}
