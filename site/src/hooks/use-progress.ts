import { useCallback, useSyncExternalStore } from "react"

const KEY = "novbeti-addim:hazir"
const EVENT = "hazir-change"
const EMPTY = ""

let memory = EMPTY

function subscribe(onChange: () => void) {
  window.addEventListener("storage", onChange)
  window.addEventListener(EVENT, onChange)
  return () => {
    window.removeEventListener("storage", onChange)
    window.removeEventListener(EVENT, onChange)
  }
}

function read() {
  try {
    return window.localStorage.getItem(KEY) ?? EMPTY
  } catch {
    return memory
  }
}

function write(value: string) {
  memory = value
  try {
    window.localStorage.setItem(KEY, value)
  } catch {
    // Brauzer yaddaşı bağlıdırsa, seçim yalnız bu səhifədə yaşayır.
  }
  window.dispatchEvent(new Event(EVENT))
}

export function useProgress() {
  const raw = useSyncExternalStore(subscribe, read, () => EMPTY)
  const done = new Set(raw ? raw.split(",") : [])

  const toggle = useCallback((id: string) => {
    const next = new Set(read() ? read().split(",") : [])
    if (next.has(id)) next.delete(id)
    else next.add(id)
    write([...next].join(","))
  }, [])

  return { done, toggle }
}
