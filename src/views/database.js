
import React from "react";
import Button from "../components/buttons";
import "../styles/colors.css";
import "../styles/database.css";
import useMethods from 'use-methods';

const app = {
	initialState: {
		email: "",
		password: "",
	},
	
}

function Database() {
    return (
        <div className="vstack background grid-color space-8 container ">
            <div className="vstack align-start w-full my-14" style={{width: "min-content", "--dm-align-self": "center"}}>
                <div className="text-64 text-color weight-900 ws-preserve" >nossaflex. db</div>
                <div className="weight-200 text-24 text-color">Welcome, Josh</div>
            </div>
            <table className="rounded-5 align-start w-full mt-64">
                
                    <th className="weight-900 text-18 text-color text-left">roll</th>
                    <th className="weight-900 text-18 text-color text-left">camera</th>
                    <th className="weight-900 text-18 text-color text-left">film stock</th>
                    <th className="weight-900 text-18 text-color text-left">format</th>
                    <th className="weight-900 text-18 text-color text-left">active date</th>
                    <th className="weight-500 text-12 text-color underline text-center">Download All</th>
                
                <tbody className="rounded-5">
                    <tr>
                    <td className="text-left text-color">Roll 001</td>
                    <td className="text-left text-color">Leica M6</td>
                    <td className="text-left text-color">Portra 400</td>
                    <td className="text-left text-color">35mm</td>
                    <td className="text-left text-color">23 Jul 20 - 24 Jul 20</td>
                    <td className="underline text-12 text-center text-color">Download</td>
                    </tr>
                    <tr>
                    <td className="text-left text-color">Roll 002</td>
                    <td className="text-left text-color">Leica M4</td>
                    <td className="text-left text-color">Portra 400</td>
                    <td className="text-left text-color">35mm</td>
                    <td className="text-left text-color">23 Jul 20 - 24 Jul 20</td>
                    <td className="underline text-12 text-center text-color">Download</td>
                    </tr>
                </tbody>
            </table>
            </div>
	)
}

export default Database;