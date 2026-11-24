import { useCallback, useSyncExternalStore } from "react"
import { defaultBusiness, isBusinessId, type BusinessId } from "../data/roadmap"

const PARAM = "sahe"
const EVENT = "sahe-change"

function subscribe(onChange: () => void) {
  window.addEventListener("popstate", onChange)
  window.addEventListener(EVENT, onChange)
  return () => {
    window.removeEventListener("popstate", onChange)
    window.removeEventListener(EVENT, onChange)
  }
}

function read(): BusinessId {
  const value = new URLSearchParams(window.location.search).get(PARAM)
  return isBusinessId(value) ? value : defaultBusiness
}

export function useBusiness() {
  const business = useSyncExternalStore(subscribe, read, () => defaultBusiness)

  const setBusiness = useCallback((id: BusinessId) => {
    const url = new URL(window.location.href)
    url.searchParams.set(PARAM, id)
    window.history.replaceState(null, "", url)
    window.dispatchEvent(new Event(EVENT))
  }, [])

  return [business, setBusiness] as const
}
