import React from "react";
import './packs.scss'


export const Packs = () => {
    return (
        <>
           <div className='wrapper_packs'>
               <h4>Packs page</h4>
               <input type="checkbox"/>
               <span>my packs</span>
               <h4>Card packs</h4>
               <table id="simple-board">
                   <tbody>
                   <tr id="row0">
                       <td id="cell0-0">name</td>
                       <td id="cell0-1">cards count</td>
                       <td id="cell0-2">updated</td>
                       <td id="cell0-2">url</td>
                       <td id="cell0-2"><button>add</button></td>
                   </tr>
                   <tr id="row1">
                       <td id="cell1-0">4</td>
                       <td id="cell1-1">5</td>
                       <td id="cell1-2">6</td>
                   </tr>
                   <tr id="row2">
                       <td id="cell2-0">7</td>
                       <td id="cell2-1">8</td>
                       <td id="cell2-2">9</td>
                   </tr>
                   </tbody>
               </table>
           </div>
        </>
    )
}