import React, { useState } from "react";
import './1-useState.css';


const UseState = () => {

    const [angka1, setAngka1] = useState(0);
    const [angka2, setAngka2] = useState(0);
    const [hasil, setHasil] = useState(0);

    const penjumlahan = () => {
        setHasil(angka1 + angka2);
    }
    const pengurangan = () => {
        setHasil(angka1 - angka2);
    }
    const perkalian = () => {
        setHasil(angka1 * angka2);
    }
    const pembagian = () => {
        setHasil(angka1 / angka2);
    }
    const hapus = () => {
        setAngka1(0);
        setAngka2(0);
        setHasil(0);
    }

    return (
        <>
            
            <div className="container">
                <h1>App useState</h1>

                <label>Angka 1</label>
                <input type="number" name="angka1"
                       value={angka1}
                       onChange={(e) => setAngka1(Number(e.target.value))}></input>

                <label>Angka 2</label>
                <input type="number" name="angka2"
                       value={angka2}
                       onChange={(e) => setAngka2(Number(e.target.value))}></input>

                <label>Hasil</label>
                <input type="number" name="hasil" disabled
                       value={hasil}></input>

                <div>
                    <button onClick={penjumlahan}> PENJUMLAHAN</button>
                    <button onClick={pengurangan}> PENGURANGAN</button>
                    <button onClick={perkalian}> PERKALIAN</button>
                    <button onClick={pembagian}> PEMBAGIAN</button>
                    <button onClick={hapus}> HAPUS</button>
                </div>

            </div>
        </>
    );
};

export default UseState;