# @rqt/ip

[![npm version](https://badge.fury.io/js/%40rqt%2Fip.svg)](https://npmjs.org/package/@rqt/ip)

`@rqt/ip` Returns a public IP address of the host.

```sh
yarn add @rqt/ip
```

<p align="center"><a href="#table-of-contents">
  <img src="/.documentary/section-breaks/0.svg?sanitize=true">
</a></p>

## Table Of Contents

- [Table Of Contents](#table-of-contents)
- [API](#api)
- [`async ip(options?: Options): string`](#async-ipoptions-options-string)
  * [`_rqt.IpOptions`](#type-_rqtipoptions)
- [Copyright](#copyright)

<p align="center"><a href="#table-of-contents">
  <img src="/.documentary/section-breaks/1.svg?sanitize=true">
</a></p>

## API

The package is available by importing its default function:

```js
import ip from '@rqt/ip'
```

<p align="center"><a href="#table-of-contents">
  <img src="/.documentary/section-breaks/2.svg?sanitize=true">
</a></p>

## `async ip(`<br/>&nbsp;&nbsp;`options?: Options,`<br/>`): string`

Returns the IP address as seen by an external web-server.

<strong><a name="type-_rqtipoptions">`_rqt.IpOptions`</a></strong>: Options for the request.
<table>
 <thead><tr>
  <th>Name</th>
  <th>Type &amp; Description</th>
  <th>Default</th>
 </tr></thead>
 <tr>
  <td rowSpan="3" align="center">host</td>
  <td><em>string</em></td>
  <td rowSpan="3"><code>https://api.ipify.org</code></td>
 </tr>
 <tr></tr>
 <tr>
  <td>The address from which to get the IP address.</td>
 </tr>
</table>

```js
const GetIp = async (host) => {
  const res = await ip({ host })
  return res
}
```
```
127.0.0.1
```

<p align="center"><a href="#table-of-contents">
  <img src="/.documentary/section-breaks/3.svg?sanitize=true">
</a></p>

## Copyright

<table>
  <tr>
    <th>
      <a href="https://artd.eco">
        <img width="100" src="https://raw.githubusercontent.com/wrote/wrote/master/images/artdeco.png"
          alt="Art Deco">
      </a>
    </th>
    <th>© <a href="https://artd.eco">Art Deco</a> for <a href="https://rqt.biz">Rqt</a> 2019</th>
    <th>
      <a href="https://www.technation.sucks" title="Tech Nation Visa">
        <img width="100" src="https://raw.githubusercontent.com/idiocc/cookies/master/wiki/arch4.jpg"
          alt="Tech Nation Visa">
      </a>
    </th>
    <th><a href="https://www.technation.sucks">Tech Nation Visa Sucks</a></th>
  </tr>
</table>

<p align="center"><a href="#table-of-contents">
  <img src="/.documentary/section-breaks/-1.svg?sanitize=true">
</a></p>