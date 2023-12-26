const apiIpv4Base = `https://api.ipify.org`
const apiIpv6Base = `https://api64.ipify.org`


// Validate that a given string is a valid IPv4 address format-wise.
const isValidIpv4 = (addr: string): boolean => {
    const ipv4Regex = /^(25[0-5]|2[0-4][0-9]|[0-1]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[0-1]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[0-1]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[0-1]?[0-9][0-9]?)$/

    return ipv4Regex.test(addr)
}

// Will always return an IPv4 address.
export const fetchIpv4 = async () => {
    const ipv4Addr = await fetch(`${apiIpv4Base}?format=json`).then((resp: Response) => {
        if (!resp.ok) {
            throw new Error(`API error: ${resp.status}`)
        }

        return resp.json()
    }).then((data: any) => {
        return data.ip
    }).catch((error: Error) => {
        console.error(`Error: ${error.message}`)
        return "IPv4: Something went wrong... Refresh?"
    })

    return ipv4Addr
}

// Will return an IPv4 address if a public IPv6 address is not available.
export const fetchIpv6 = async () => {
    const ipv6Addr = await fetch(`${apiIpv6Base}?format=json`).then((resp: Response) => {
        if (!resp.ok) {
            throw new Error(`API responded with an error: ${resp.status}`)
        }

        return resp.json()
    }).then((data: any) => {
        return data.ip
    }).catch((error: Error) => {
        console.error(`Error: ${error.message}`)
        return "IPv6: Something went wrong... Refresh?"
    })

    if (isValidIpv4(ipv6Addr)) {
        return "No public IPv6 address detected."
    }

    return ipv6Addr
}