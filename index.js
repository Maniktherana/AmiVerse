// the following code is required to resolve the "btoa() error on android"
import { decode, encode } from "base-64";

if (!global.btoa) {
  global.btoa = encode;
}

if (!global.atob) {
  global.atob = decode;
}

import "expo-router/entry";
