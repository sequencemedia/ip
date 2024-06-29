import {
  networkInterfaces
} from 'node:os'

function isIPv4 ({ family }) {
  return (
    family === 'IPv4'
  )
}

function isIPv6 ({ family }) {
  return (
    family === 'IPv6'
  )
}

function isInternal ({ internal }) {
  return (
    internal === true
  )
}

function isExternal ({ internal }) {
  return (
    internal === false
  )
}

function reduceInternalIPv4 (accumulator, networkInterface) {
  return (
    accumulator ?? networkInterface.filter(isInternal).find(isIPv4)
  )
}

function reduceExternalIPv4 (accumulator, networkInterface) {
  return (
    accumulator ?? networkInterface.filter(isExternal).find(isIPv4)
  )
}

function reduceInternalIPv6 (accumulator, networkInterface) {
  return (
    accumulator ?? networkInterface.filter(isInternal).find(isIPv6)
  )
}

function reduceExternalIPv6 (accumulator, networkInterface) {
  return (
    accumulator ?? networkInterface.filter(isExternal).find(isIPv6)
  )
}

export function getInternalIPv4 () {
  return (
    Object.values(networkInterfaces())
      .reduce(reduceInternalIPv4, null)
  )
}

export function getExternalIPv4 () {
  return (
    Object.values(networkInterfaces())
      .reduce(reduceExternalIPv4, null)
  )
}

export function getInternalIPv6 () {
  return (
    Object.values(networkInterfaces())
      .reduce(reduceInternalIPv6, null)
  )
}

export function getExternalIPv6 () {
  return (
    Object.values(networkInterfaces())
      .reduce(reduceExternalIPv6, null)
  )
}
