
import { useState } from "react";


interface PatientType {
    presentComplain: string;
    pastMedicalHistory: string;
    familySevereDisease: string;
    familySevereDiseaseSide: string;
    familySevereDiseaseMember: string;
    familySevereDiseaseDetail: string;
    smoking: string;
    alcoholic: string;
    drugAddict: string;
    foodsLike: string;
    foodsDislike: string;
    colorLike: string;

}



const FormTwo = () => {

    const [inputs, setInputs] = useState<PatientType>({

        presentComplain: "",
        pastMedicalHistory: "",
        familySevereDisease: "",
        familySevereDiseaseSide: "Paternal",
        familySevereDiseaseMember: "",
        familySevereDiseaseDetail: "",
        smoking: "No",
        alcoholic: "",
        drugAddict: "",
        foodsLike: "",
        foodsDislike: "",
        colorLike: ""
    });

    const [severeDisease, setSevereDisease] = useState<boolean>(false);
    const [paternalSide, setPaternalSide] = useState<boolean>(true);
    const [paternalMember, setPaternalMember] = useState<string>("");
    const [maternalMember, setMaternalMember] = useState<string>("");

    const [smoking, setSmoking] = useState<boolean>(false);

    const handleSevereDisease = (event: any) => {
        if (event.target.value === "Yes") {
            setSevereDisease(true);
        } else {
            setSevereDisease(false);
        }
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }));

    }





    const radioHandleSmoking = (event: any) => {
        if (event.target.value === "Yes") {
            setSmoking(true);
        } else {
            setSmoking(false);
        }

        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }));
    }

    const radioHandleSide = (event: any) => {
        setPaternalMember("");
        setMaternalMember("");
        if (event.target.value === "Paternal") {
            setPaternalSide(true);
            setPaternalMember("");
        } else {
            setPaternalSide(false);
            setMaternalMember("");
        }

        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }));
        setInputs(values => ({ ...values, familySevereDiseaseMember: "" }));
    }

    const selectFamilyMember = (event: any) => {
        const name = event.target.name;
        const value = event.target.value;

        if (name === "paternalMember") {
            setPaternalMember(value);
        } else {
            setMaternalMember(value);
        }
        setInputs(values => ({ ...values, familySevereDiseaseMember: value }));
    }

    const textareaHandler = (event: any) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }));
    }

    // const handleChange = (event: any) => {
    //     const name = event.target.name;
    //     const value = event.target.value;
    //     setInputs(values => ({ ...values, [name]: value }));
    // }

    const handleCheckboxSmoking = (event: any) => {
        const name = event.target.name;
        if (event.target.checked === true) {
            setInputs(values => ({ ...values, [name]: "Yes" }));
        } else {
            setInputs(values => ({ ...values, [name]: "No" }));

        }

    }

    const handleSubmit = (event: any) => {
        event.preventDefault();
        console.log(JSON.stringify(inputs));
    }
    return (
        <>
            <div>
                <h4>Tell more about disease</h4>
            </div>
            <div className="calculate-content">
                <form onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="calculate-form appointment-form-3 mb-20" >
                                <textarea
                                    name="presentComplain"
                                    cols={30}
                                    rows={10}
                                    placeholder="Present Complain"
                                    value={inputs.presentComplain || ""}
                                    onChange={textareaHandler}
                                ></textarea>
                                <i className="far fa-edit"></i>
                            </div>
                        </div>

                        <div className="col-xl-12">
                            <div className="calculate-form appointment-form-3 mb-20">
                                <textarea
                                    name="pastMedicalHistory"
                                    cols={30}
                                    rows={10}
                                    placeholder="Past Medical History"
                                    value={inputs.pastMedicalHistory || ""}
                                    onChange={textareaHandler}
                                ></textarea>
                                <i className="far fa-edit"></i>

                            </div>
                        </div>


                        <div className="col-xl-12 mb-20">
                            <div className="form-check form-check-inline">
                                <h6>Family History (Any severe disease)</h6>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="familySevereDisease" value={"Yes"}
                                    onChange={handleSevereDisease} id="severeDiseaseYes" />
                                <label className="form-check-label" htmlFor="severeDiseaseYes">Yes</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="familySevereDisease" value={"No"}
                                    onChange={handleSevereDisease} id="severeDiseaseNo" />
                                <label className="form-check-label" htmlFor="severeDiseaseNo">No</label>
                            </div>
                        </div>
                        {severeDisease &&
                            <>


                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-6">
                                    <div className="mt-15">
                                        <div className="form-check form-check-inline">
                                            <h6 className="form-check-label">Side</h6>
                                        </div>
                                        <div className="form-check form-check-inline">
                                            <input className="form-check-input" type="radio" name="familySevereDiseaseSide" value={"Paternal"}
                                                onChange={radioHandleSide} id="side1" checked={paternalSide} />
                                            <label className="form-check-label" htmlFor="side1">Paternal</label>
                                        </div>
                                        <div className="form-check form-check-inline">
                                            <input className="form-check-input" type="radio" name="familySevereDiseaseSide" value={"Maternal"}
                                                onChange={radioHandleSide} id="side2" checked={!paternalSide} />
                                            <label className="form-check-label" htmlFor="side2">Maternal</label>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-xl-6 col-lg-6 col-md-6">
                                    {paternalSide ?

                                        <select className="sh-select  mb-3" value={paternalMember || ""} name="paternalMember" onChange={selectFamilyMember}>
                                            <option value={""} disabled={true} selected={paternalMember ? true : false} >Select Paternal Member</option>
                                            <option value="Grand Father">Grand Father</option>
                                            <option value="Grand Mother">Grand Mother</option>
                                            <option value="Uncle (Chacha)">Uncle (Chacha)</option>
                                            <option value="Aunty (Bua)">Aunty (Bua)</option>
                                        </select>
                                        :
                                        <select className="sh-select  mb-3" value={maternalMember || ""} name="maternalMember" onChange={selectFamilyMember}>
                                            <option value={""} disabled={true} selected={maternalMember ? true : false} >Select Maternal Member</option>
                                            <option value="Grand Father">Grand Father</option>
                                            <option value="Grand Mother">Grand Mother</option>
                                            <option value="Uncle (Mama)">Uncle (Mama)</option>
                                        </select>
                                    }
                                </div>

                                <div className="col-xl-12">
                                    <div className="calculate-form appointment-form-3 mb-20"    >
                                        <textarea
                                            name="familySevereDiseaseDetail"
                                            cols={30}
                                            rows={10}
                                            placeholder="Severe Disease Detail"
                                            value={inputs.familySevereDiseaseDetail || ""}
                                            onChange={textareaHandler}
                                        ></textarea>
                                        <i className="far fa-edit"></i>

                                    </div>
                                </div>
                            </>
                        }

                        <div className="col-xl-6 col-lg-6 col-md-6">
                            <div className="form-check form-check-inline">
                                <h6 className="form-check-label">Habit</h6>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="smoking" value={"Yes"}
                                    onChange={radioHandleSmoking} id="smoking1" checked={smoking} />
                                <label className="form-check-label" htmlFor="inlineRadio1">Smoker</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="smoking" value={"No"}
                                    onChange={radioHandleSmoking} id="smoking2" checked={!smoking} />
                                <label className="form-check-label" htmlFor="inlineRadio2">Non smoker</label>
                            </div>
                        </div>

                        <div className="col-xl-6 col-lg-6 col-md-6">
                            <div className="row">
                                <div className="col form-check">
                                    <input name="alcoholic" className="form-check-input" type="checkbox" id="alcoholic"
                                        onChange={handleCheckboxSmoking} checked={inputs.alcoholic === "Yes" ? true : false} />
                                    <label className="form-check-label" htmlFor="alcoholic">
                                        Alcoholic
                                    </label>
                                </div>
                                <div className="col form-check">
                                    <input name="drugAddict" className="form-check-input" type="checkbox" id="drugaddict"
                                        onChange={handleCheckboxSmoking} checked={inputs.drugAddict === "Yes" ? true : false} />
                                    <label className="form-check-label" htmlFor="drugaddict">
                                        Drug Addict
                                    </label>
                                </div>

                            </div>
                        </div>


                        <div className="col-xl-12">
                            <div className="calculate-form appointment-form-3 mb-20" >
                                <button type="submit" className="primary_btn btn mt-20">
                                    submit query
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
};

export default FormTwo;