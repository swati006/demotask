import React from 'react'
import { Route } from "react-router-dom";

const startsWithCapital = ([...word]) => {
    let path = []
    word.map((char, key) => {
        if (/[A-Z]/.test(char)) {
            if (key > 0) {
                path.push('-')
                path.push(char.toLowerCase())
            } else {
                path.push(char.toLowerCase())
            }
        } else {
            path.push(char)
        }
    })
    return path.join("")
}

const getkey = (Pages) => {
    let arry = []
    for (let key in Pages) {
        if (Object.hasOwnProperty.call(Pages, key)) {
            if (key === 'Product') {
                arry.push(<Route key={key} path={'/' + startsWithCapital(key)} exact={true} component={Pages[key]} />)
                arry.push(<Route key={key} path={'/'} exact={true} component={Pages[key]} />)
            } else {
                arry.push(<Route key={key} path={'/' + startsWithCapital(key)} exact={true} component={Pages[key]} />)
            }
        }
    }
    return arry
}

export default function RouteFunction(Pages) {
        return getkey(Pages)
}