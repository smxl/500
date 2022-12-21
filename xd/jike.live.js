let body = JSON.parse($response.body);

if (/^https:\/\/api\.ruguoapp\.com\/1\.0\/recommendFeed\/list/.test($request.url)) {
  body.data = body.data.filter((d) => !d.live && !d.lives);
  body = JSON.stringify(body);
}

$done({ body });
