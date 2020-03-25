import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrash, faCheck } from "@fortawesome/free-solid-svg-icons"

import './index.scss'

export default function List() {
    return (
        <div className="list-container">
            <ul className="list">
                <li className="list__item">
                    <div className="list__item-checkbox">
                        <div className="list-checkbox">
                            <FontAwesomeIcon icon={faCheck}/>
                        </div>
                    </div>
                    <input type="text"/>
                    <span>
                        <FontAwesomeIcon icon={faTrash}/>
                    </span> 
                </li>
            </ul>
        </div>
    )
}
