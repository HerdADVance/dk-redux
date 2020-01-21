import React from "react"

export default function Player({ id, name, salary, team, position}) {

    return (
        <tr className="player">
        	<td className="position">{position}</td>
            <td className="name">{name}</td>
            <td className="team">{team}</td>
            <td className="team">{salary}</td>
            <td className="team">---</td>
        </tr>
    )
}