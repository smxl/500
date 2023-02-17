// 白名单
const whitelist = ['q', 'search'];

const url = $request.url;
const index = url.indexOf('?');

if (index !== -1) {
  const query = url.substring(index + 1);
  const newQueryParams = [];

  const queryParams = query.split('&');

  for (let i = 0; i < queryParams.length; i++) {
    const queryParam = queryParams[i];
    const parts = queryParam.split('=');
    const key = parts[0];
    const value = parts[1];

    // 如果参数名在白名单内，则保留，否则丢弃
    if (whitelist.includes(key)) {
      newQueryParams.push(`${key}=${value}`);
    }
  }

  const newUrl = url.substring(0, index) + '?' + newQueryParams.join('&');

  $done({ url: newUrl });
} else {
  $done({});
}
