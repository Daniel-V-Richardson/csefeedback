import React from "react";
import { addDoc, collection } from "@firebase/firestore";
import { firestore } from "../firebase";
import Typography from "@mui/material/Typography";
import "./form.css";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const CSEForm7B = () => {

  

  const handleSubmit = (event) => {
    event.preventDefault();

    const ref = collection(firestore, "cse-feedbacks/7/CNS");

    var name = event.target.name.value;
    var regno = event.target.regno.value;
    var dept = event.target.dept.value;
    var sem = event.target.sem.value;
    var cns1 = event.target.cns1.value;
    var cns2 = event.target.cns2.value;
    var cns3 = event.target.cns3.value;
    var cns4 = event.target.cns4.value;
    var cns5 = event.target.cns5.value;
    var cns6 = event.target.cns6.value;
    var cns7 = event.target.cns7.value;
    var cns8 = event.target.cns8.value;
    var cns9 = event.target.cns9.value;
    var cns10 = event.target.cns10.value;
    var cns11 = event.target.cns11.value;
    var cns12 = event.target.cns12.value;
    var cns13 = event.target.cns13.value;
    var cns14 = event.target.cns14.value;
    var cns15 = event.target.cns15.value;
    var cns16 = event.target.cns16.value;
    var cns17 = event.target.cns17.value;
    var cns18 = event.target.cns18.value;
    var cns19 = event.target.cns19.value;
    var cns20 = event.target.cns20.value;
    var cns21 = event.target.cns21.value;
    var cns22 = event.target.cns22.value;
    var cns23 = event.target.cns23.value;

    let data = {
      Name: name,
      RegisterNumber: regno,
      Department: dept,
      Semester: sem,
      "Punctuality In Class": cns1,
      "Regularity in taking Classes": cns2,
      "Completes syllabus of the course in time": cns3,
      "Scheduled organization of assignments, class test, quizzes and seminars":
        cns4,
      "Focus on Syllabi": cns5,
      "Self-confidence": cns6,
      "Communication skills": cns7,
      "Conducting the classroom discussions": cns8,
      "Teaching the subject matter": cns9,
      "Delivery of structured lecture": cns10,
      "Skill of linking subject to life experience & creating interest in the subject":
        cns11,
      "Uses of teaching aids (OHP/Blackboard /PPT's)": cns12,
      "Blackboard/Whiteboard work in terms of legibility, visibility and structure":
        cns13,
      "Uses of innovative teaching methods": cns14,
      "Shares the answers of class tests or sessional test questions after the conduct of the class tests/sessional tests.":
        cns15,
      "Shows the evaluated answer books of class tests to the students": cns16,
      "Makes sure that he/she is being understood": cns17,
      "Helping approach towards varied academic interests of students": cns18,
      "Helps student in providing study material": cns19,
      "Helps students irrespective of ethnicity and culture/background": cns20,
      "Helps students irrespective of gender": cns21,
      "Helps students facing physical, emotional and learning challenges":
        cns22,
      "Refers to latest developments in the field": cns23,
    };
    try {
      addDoc(ref, data);
    } catch (err) {
      console.log(err);
    }
    alert("Your Data has been recorded for CNS. Continue with the next Subject")
    alert("Note:- Once Submitted. No need to Submit Again!!")
  };

  const handleSubmitCC = (event) => {
    event.preventDefault();

    const ref = collection(firestore, "cse-feedbacks/7/CC/");

    var name = event.target.name.value;
    var regno = event.target.regno.value;
    var dept = event.target.dept.value;
    var sem = event.target.sem.value;
    var cc1 = event.target.cc1.value;
    var cc2 = event.target.cc2.value;
    var cc3 = event.target.cc3.value;
    var cc4 = event.target.cc4.value;
    var cc5 = event.target.cc5.value;
    var cc6 = event.target.cc6.value;
    var cc7 = event.target.cc7.value;
    var cc8 = event.target.cc8.value;
    var cc9 = event.target.cc9.value;
    var cc10 = event.target.cc10.value;
    var cc11 = event.target.cc11.value;
    var cc12 = event.target.cc12.value;
    var cc13 = event.target.cc13.value;
    var cc14 = event.target.cc14.value;
    var cc15 = event.target.cc15.value;
    var cc16 = event.target.cc16.value;
    var cc17 = event.target.cc17.value;
    var cc18 = event.target.cc18.value;
    var cc19 = event.target.cc19.value;
    var cc20 = event.target.cc20.value;
    var cc21 = event.target.cc21.value;
    var cc22 = event.target.cc22.value;
    var cc23 = event.target.cc23.value;

    let data = {
      Name: name,
      RegisterNumber: regno,
      Department: dept,
      Semester: sem,
      "Punctuality In Class": cc1,
      "Regularity in taking Classes": cc2,
      "Completes syllabus of the course in time": cc3,
      "Scheduled organization of assignments, class test, quizzes and seminars":
        cc4,
      "Focus on Syllabi": cc5,
      "Self-confidence": cc6,
      "Communication skills": cc7,
      "Conducting the classroom discussions": cc8,
      "Teaching the subject matter": cc9,
      "Delivery of structured lecture": cc10,
      "Skill of linking subject to life experience & creating interest in the subject":
        cc11,
      "Uses of teaching aids (OHP/Blackboard /PPT's)": cc12,
      "Blackboard/Whiteboard work in terms of legibility, visibility and structure":
        cc13,
      "Uses of innovative teaching methods": cc14,
      "Shares the answers of class tests or sessional test questions after the conduct of the class tests/sessional tests.":
        cc15,
      "Shows the evaluated answer books of class tests to the students": cc16,
      "Makes sure that he/she is being understood": cc17,
      "Helping approach towards varied academic interests of students": cc18,
      "Helps student in providing study material": cc19,
      "Helps students irrespective of ethnicity and culture/background": cc20,
      "Helps students irrespective of gender": cc21,
      "Helps students facing physical, emotional and learning challenges": cc22,
      "Refers to latest developments in the field": cc23,
    };
    try {
      addDoc(ref, data);
    } catch (err) {
      console.log(err);
    }
    alert("Your Data has been recorded for CC. Continue with the next Subject")
    alert("Note:- Once Submitted. No need to Submit Again!!")
  };
  const handleSubmitDM = (event) => {
    event.preventDefault();

    const ref = collection(firestore, "cse-feedbacks/7/DM/");

    var name = event.target.name.value;
    var regno = event.target.regno.value;
    var dept = event.target.dept.value;
    var sem = event.target.sem.value;
    var cc1 = event.target.cc1.value;
    var cc2 = event.target.cc2.value;
    var cc3 = event.target.cc3.value;
    var cc4 = event.target.cc4.value;
    var cc5 = event.target.cc5.value;
    var cc6 = event.target.cc6.value;
    var cc7 = event.target.cc7.value;
    var cc8 = event.target.cc8.value;
    var cc9 = event.target.cc9.value;
    var cc10 = event.target.cc10.value;
    var cc11 = event.target.cc11.value;
    var cc12 = event.target.cc12.value;
    var cc13 = event.target.cc13.value;
    var cc14 = event.target.cc14.value;
    var cc15 = event.target.cc15.value;
    var cc16 = event.target.cc16.value;
    var cc17 = event.target.cc17.value;
    var cc18 = event.target.cc18.value;
    var cc19 = event.target.cc19.value;
    var cc20 = event.target.cc20.value;
    var cc21 = event.target.cc21.value;
    var cc22 = event.target.cc22.value;
    var cc23 = event.target.cc23.value;

    let data = {
      Name: name,
      RegisterNumber: regno,
      Department: dept,
      Semester: sem,
      "Punctuality In Class": cc1,
      "Regularity in taking Classes": cc2,
      "Completes syllabus of the course in time": cc3,
      "Scheduled organization of assignments, class test, quizzes and seminars":
        cc4,
      "Focus on Syllabi": cc5,
      "Self-confidence": cc6,
      "Communication skills": cc7,
      "Conducting the classroom discussions": cc8,
      "Teaching the subject matter": cc9,
      "Delivery of structured lecture": cc10,
      "Skill of linking subject to life experience & creating interest in the subject":
        cc11,
      "Uses of teaching aids (OHP/Blackboard /PPT's)": cc12,
      "Blackboard/Whiteboard work in terms of legibility, visibility and structure":
        cc13,
      "Uses of innovative teaching methods": cc14,
      "Shares the answers of class tests or sessional test questions after the conduct of the class tests/sessional tests.":
        cc15,
      "Shows the evaluated answer books of class tests to the students": cc16,
      "Makes sure that he/she is being understood": cc17,
      "Helping approach towards varied academic interests of students": cc18,
      "Helps student in providing study material": cc19,
      "Helps students irrespective of ethnicity and culture/background": cc20,
      "Helps students irrespective of gender": cc21,
      "Helps students facing physical, emotional and learning challenges": cc22,
      "Refers to latest developments in the field": cc23,
    };
    try {
      addDoc(ref, data);
    } catch (err) {
      console.log(err);
    }
    alert("Your Data has been recorded for DM. Continue with the next Subject")
    alert("Note:- Once Submitted. No need to Submit Again!!")
  };
  const handleSubmitPOM = (event) => {
    event.preventDefault();

    const ref = collection(firestore, "cse-feedbacks/7/POM/");

    var name = event.target.name.value;
    var regno = event.target.regno.value;
    var dept = event.target.dept.value;
    var sem = event.target.sem.value;
    var cc1 = event.target.cc1.value;
    var cc2 = event.target.cc2.value;
    var cc3 = event.target.cc3.value;
    var cc4 = event.target.cc4.value;
    var cc5 = event.target.cc5.value;
    var cc6 = event.target.cc6.value;
    var cc7 = event.target.cc7.value;
    var cc8 = event.target.cc8.value;
    var cc9 = event.target.cc9.value;
    var cc10 = event.target.cc10.value;
    var cc11 = event.target.cc11.value;
    var cc12 = event.target.cc12.value;
    var cc13 = event.target.cc13.value;
    var cc14 = event.target.cc14.value;
    var cc15 = event.target.cc15.value;
    var cc16 = event.target.cc16.value;
    var cc17 = event.target.cc17.value;
    var cc18 = event.target.cc18.value;
    var cc19 = event.target.cc19.value;
    var cc20 = event.target.cc20.value;
    var cc21 = event.target.cc21.value;
    var cc22 = event.target.cc22.value;
    var cc23 = event.target.cc23.value;

    let data = {
      Name: name,
      RegisterNumber: regno,
      Department: dept,
      Semester: sem,
      "Punctuality In Class": cc1,
      "Regularity in taking Classes": cc2,
      "Completes syllabus of the course in time": cc3,
      "Scheduled organization of assignments, class test, quizzes and seminars":
        cc4,
      "Focus on Syllabi": cc5,
      "Self-confidence": cc6,
      "Communication skills": cc7,
      "Conducting the classroom discussions": cc8,
      "Teaching the subject matter": cc9,
      "Delivery of structured lecture": cc10,
      "Skill of linking subject to life experience & creating interest in the subject":
        cc11,
      "Uses of teaching aids (OHP/Blackboard /PPT's)": cc12,
      "Blackboard/Whiteboard work in terms of legibility, visibility and structure":
        cc13,
      "Uses of innovative teaching methods": cc14,
      "Shares the answers of class tests or sessional test questions after the conduct of the class tests/sessional tests.":
        cc15,
      "Shows the evaluated answer books of class tests to the students": cc16,
      "Makes sure that he/she is being understood": cc17,
      "Helping approach towards varied academic interests of students": cc18,
      "Helps student in providing study material": cc19,
      "Helps students irrespective of ethnicity and culture/background": cc20,
      "Helps students irrespective of gender": cc21,
      "Helps students facing physical, emotional and learning challenges": cc22,
      "Refers to latest developments in the field": cc23,
    };
    try {
      addDoc(ref, data);
    } catch (err) {
      console.log(err);
    }
    alert("Your Data has been recorded for POM. Continue with the next Subject")
    alert("Note:- Once Submitted. No need to Submit Again!!")
  };
  const handleSubmitET = (event) => {
    event.preventDefault();

    const ref = collection(firestore, "cse-feedbacks/7/ET/");

    var name = event.target.name.value;
    var regno = event.target.regno.value;
    var dept = event.target.dept.value;
    var sem = event.target.sem.value;
    var cc1 = event.target.cc1.value;
    var cc2 = event.target.cc2.value;
    var cc3 = event.target.cc3.value;
    var cc4 = event.target.cc4.value;
    var cc5 = event.target.cc5.value;
    var cc6 = event.target.cc6.value;
    var cc7 = event.target.cc7.value;
    var cc8 = event.target.cc8.value;
    var cc9 = event.target.cc9.value;
    var cc10 = event.target.cc10.value;
    var cc11 = event.target.cc11.value;
    var cc12 = event.target.cc12.value;
    var cc13 = event.target.cc13.value;
    var cc14 = event.target.cc14.value;
    var cc15 = event.target.cc15.value;
    var cc16 = event.target.cc16.value;
    var cc17 = event.target.cc17.value;
    var cc18 = event.target.cc18.value;
    var cc19 = event.target.cc19.value;
    var cc20 = event.target.cc20.value;
    var cc21 = event.target.cc21.value;
    var cc22 = event.target.cc22.value;
    var cc23 = event.target.cc23.value;

    let data = {
      Name: name,
      RegisterNumber: regno,
      Department: dept,
      Semester: sem,
      "Punctuality In Class": cc1,
      "Regularity in taking Classes": cc2,
      "Completes syllabus of the course in time": cc3,
      "Scheduled organization of assignments, class test, quizzes and seminars":
        cc4,
      "Focus on Syllabi": cc5,
      "Self-confidence": cc6,
      "Communication skills": cc7,
      "Conducting the classroom discussions": cc8,
      "Teaching the subject matter": cc9,
      "Delivery of structured lecture": cc10,
      "Skill of linking subject to life experience & creating interest in the subject":
        cc11,
      "Uses of teaching aids (OHP/Blackboard /PPT's)": cc12,
      "Blackboard/Whiteboard work in terms of legibility, visibility and structure":
        cc13,
      "Uses of innovative teaching methods": cc14,
      "Shares the answers of class tests or sessional test questions after the conduct of the class tests/sessional tests.":
        cc15,
      "Shows the evaluated answer books of class tests to the students": cc16,
      "Makes sure that he/she is being understood": cc17,
      "Helping approach towards varied academic interests of students": cc18,
      "Helps student in providing study material": cc19,
      "Helps students irrespective of ethnicity and culture/background": cc20,
      "Helps students irrespective of gender": cc21,
      "Helps students facing physical, emotional and learning challenges": cc22,
      "Refers to latest developments in the field": cc23,
    };
    try {
      addDoc(ref, data);
    } catch (err) {
      console.log(err);
    }
    alert("Your Data has been recorded for ET. Continue with the next Subject")
    alert("Note:- Once Submitted. No need to Submit Again!!")
  };
  const handleSubmitCC_LAB = (event) => {
    event.preventDefault();

    const ref = collection(firestore, "cse-feedbacks/7/CC_LAB/");

    var name = event.target.name.value;
    var regno = event.target.regno.value;
    var dept = event.target.dept.value;
    var sem = event.target.sem.value;
    var cc1 = event.target.cc1.value;
    var cc2 = event.target.cc2.value;
    var cc3 = event.target.cc3.value;
    var cc4 = event.target.cc4.value;
    var cc5 = event.target.cc5.value;
    var cc6 = event.target.cc6.value;
    var cc7 = event.target.cc7.value;
    var cc8 = event.target.cc8.value;
    var cc9 = event.target.cc9.value;
    var cc10 = event.target.cc10.value;
    var cc11 = event.target.cc11.value;
    var cc12 = event.target.cc12.value;
    var cc13 = event.target.cc13.value;
    var cc14 = event.target.cc14.value;
    var cc15 = event.target.cc15.value;
    var cc16 = event.target.cc16.value;
    var cc17 = event.target.cc17.value;
    var cc18 = event.target.cc18.value;
    var cc19 = event.target.cc19.value;
    var cc20 = event.target.cc20.value;
    var cc21 = event.target.cc21.value;
    var cc22 = event.target.cc22.value;
    var cc23 = event.target.cc23.value;

    let data = {
      Name: name,
      RegisterNumber: regno,
      Department: dept,
      Semester: sem,
      "Punctuality In Class": cc1,
      "Regularity in taking Classes": cc2,
      "Completes syllabus of the course in time": cc3,
      "Scheduled organization of assignments, class test, quizzes and seminars":
        cc4,
      "Focus on Syllabi": cc5,
      "Self-confidence": cc6,
      "Communication skills": cc7,
      "Conducting the classroom discussions": cc8,
      "Teaching the subject matter": cc9,
      "Delivery of structured lecture": cc10,
      "Skill of linking subject to life experience & creating interest in the subject":
        cc11,
      "Uses of teaching aids (OHP/Blackboard /PPT's)": cc12,
      "Blackboard/Whiteboard work in terms of legibility, visibility and structure":
        cc13,
      "Uses of innovative teaching methods": cc14,
      "Shares the answers of class tests or sessional test questions after the conduct of the class tests/sessional tests.":
        cc15,
      "Shows the evaluated answer books of class tests to the students": cc16,
      "Makes sure that he/she is being understood": cc17,
      "Helping approach towards varied academic interests of students": cc18,
      "Helps student in providing study material": cc19,
      "Helps students irrespective of ethnicity and culture/background": cc20,
      "Helps students irrespective of gender": cc21,
      "Helps students facing physical, emotional and learning challenges": cc22,
      "Refers to latest developments in the field": cc23,
    };
    try {
      addDoc(ref, data);
    } catch (err) {
      console.log(err);
    }
    alert("Your Data has been recorded for CC Lab. Continue with the next Subject")
    alert("Note:- Once Submitted. No need to Submit Again!!")
  };
  const handleSubmitNS_LAB = (event) => {
    event.preventDefault();

    const ref = collection(firestore, "cse-feedbacks/7/NS_LAB/");

    var name = event.target.name.value;
    var regno = event.target.regno.value;
    var dept = event.target.dept.value;
    var sem = event.target.sem.value;
    var cc1 = event.target.cc1.value;
    var cc2 = event.target.cc2.value;
    var cc3 = event.target.cc3.value;
    var cc4 = event.target.cc4.value;
    var cc5 = event.target.cc5.value;
    var cc6 = event.target.cc6.value;
    var cc7 = event.target.cc7.value;
    var cc8 = event.target.cc8.value;
    var cc9 = event.target.cc9.value;
    var cc10 = event.target.cc10.value;
    var cc11 = event.target.cc11.value;
    var cc12 = event.target.cc12.value;
    var cc13 = event.target.cc13.value;
    var cc14 = event.target.cc14.value;
    var cc15 = event.target.cc15.value;
    var cc16 = event.target.cc16.value;
    var cc17 = event.target.cc17.value;
    var cc18 = event.target.cc18.value;
    var cc19 = event.target.cc19.value;
    var cc20 = event.target.cc20.value;
    var cc21 = event.target.cc21.value;
    var cc22 = event.target.cc22.value;
    var cc23 = event.target.cc23.value;

    let data = {
      Name: name,
      RegisterNumber: regno,
      Department: dept,
      Semester: sem,
      "Punctuality In Class": cc1,
      "Regularity in taking Classes": cc2,
      "Completes syllabus of the course in time": cc3,
      "Scheduled organization of assignments, class test, quizzes and seminars":
        cc4,
      "Focus on Syllabi": cc5,
      "Self-confidence": cc6,
      "Communication skills": cc7,
      "Conducting the classroom discussions": cc8,
      "Teaching the subject matter": cc9,
      "Delivery of structured lecture": cc10,
      "Skill of linking subject to life experience & creating interest in the subject":
        cc11,
      "Uses of teaching aids (OHP/Blackboard /PPT's)": cc12,
      "Blackboard/Whiteboard work in terms of legibility, visibility and structure":
        cc13,
      "Uses of innovative teaching methods": cc14,
      "Shares the answers of class tests or sessional test questions after the conduct of the class tests/sessional tests.":
        cc15,
      "Shows the evaluated answer books of class tests to the students": cc16,
      "Makes sure that he/she is being understood": cc17,
      "Helping approach towards varied academic interests of students": cc18,
      "Helps student in providing study material": cc19,
      "Helps students irrespective of ethnicity and culture/background": cc20,
      "Helps students irrespective of gender": cc21,
      "Helps students facing physical, emotional and learning challenges": cc22,
      "Refers to latest developments in the field": cc23,
    };
    try {
      addDoc(ref, data);
    } catch (err) {
      console.log(err);
    }
    alert("Your Data has been recorded for NS Lab. Thank You for Giving your feedback")
    alert("You have successfully completed your Freedback form. You may Exit Now!!")
  };

  return (
    <div className="form-container">
      <div className="heading">FeedBack Form For 7th Semester</div>
      <form className="form" onSubmit={handleSubmit}>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Cryptography and Network Security</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div className="item">
              <label htmlFor="name">Enter your name </label>
              <input type="text" name="name" id="name" required />
            </div>

            <div className="item">
              <label htmlFor="name">Enter your Register Number </label>
              <input type="number" name="regno" required />
            </div>

            <div className="item">
              <label htmlFor="name">Department </label>
              <input
                type="text"
                name="dept"
                disabled
                value="Computer Science & Engineering"
              />
            </div>

            <div className="item">
              <label htmlFor="name">Semester</label>
              <input type="text" disabled name="sem" value="7" />
            </div>
            <ol className="feedback-form">
              <li className="feedback-list">
                <div className="item">
                  <h3>Punctuality in the Class</h3>
                  <select name="cns1" id="cns1">
                    <option value="Bellow Average">1</option>
                    <option value="Average">2</option>
                    <option value="Good">3</option>
                    <option value="Very Good">4</option>
                    <option value="Excellent">5</option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>Regularity in taking Classes</h3>
                  <select name="cns2" id="cns2" required>
                    <option value="Bellow Average">1</option>
                    <option value="Average">2</option>
                    <option value="Good">3</option>
                    <option value="Very Good">4</option>
                    <option
                      value="Excellent
                "
                    >
                      5
                    </option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>Completes syllabus of the course in time</h3>
                  <select name="cns3" id="cns3">
                    <option value="Bellow Average">1</option>
                    <option value="Average">2</option>
                    <option value="Good">3</option>
                    <option value="Very Good">4</option>
                    <option
                      value="Excellent
                "
                    >
                      5
                    </option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>
                    Scheduled organization of assignments, class test, quizzes
                    and seminars
                  </h3>
                  <select name="cns4" id="cns4">
                    <option value="Bellow Average">1</option>
                    <option value="Average">2</option>
                    <option value="Good">3</option>
                    <option value="Very Good">4</option>
                    <option
                      value="Excellent
                "
                    >
                      5
                    </option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>Focus on Syllabi</h3>
                  <select name="cns5" id="cns5">
                    <option value="Bellow Average">1</option>
                    <option value="Average">2</option>
                    <option value="Good">3</option>
                    <option value="Very Good">4</option>
                    <option
                      value="Excellent
                "
                    >
                      5
                    </option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>Self-confidence</h3>
                  <select name="cns6" id="cns6">
                    <option value="Bellow Average">1</option>
                    <option value="Average">2</option>
                    <option value="Good">3</option>
                    <option value="Very Good">4</option>
                    <option
                      value="Excellent
                "
                    >
                      5
                    </option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>Communication skills</h3>
                  <select name="cns7" id="cns7">
                    <option value="Bellow Average">1</option>
                    <option value="Average">2</option>
                    <option value="Good">3</option>
                    <option value="Very Good">4</option>
                    <option
                      value="Excellent
                "
                    >
                      5
                    </option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>Conducting the classroom discussions</h3>
                  <select name="cns8" id="cns8">
                    <option value="Bellow Average">1</option>
                    <option value="Average">2</option>
                    <option value="Good">3</option>
                    <option value="Very Good">4</option>
                    <option
                      value="Excellent
                "
                    >
                      5
                    </option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>Teaching the subject matter</h3>
                  <select name="cns9" id="cns9">
                    <option value="Bellow Average">1</option>
                    <option value="Average">2</option>
                    <option value="Good">3</option>
                    <option value="Very Good">4</option>
                    <option
                      value="Excellent
                "
                    >
                      5
                    </option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>Delivery of structured lecture</h3>
                  <select name="cns10" id="cns10">
                    <option value="Bellow Average">1</option>
                    <option value="Average">2</option>
                    <option value="Good">3</option>
                    <option value="Very Good">4</option>
                    <option
                      value="Excellent
                "
                    >
                      5
                    </option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>
                    Skill of linking subject to life experience & creating
                    interest in the subject
                  </h3>
                  <select name="cns11" id="cns11">
                    <option value="Bellow Average">1</option>
                    <option value="Average">2</option>
                    <option value="Good">3</option>
                    <option value="Very Good">4</option>
                    <option
                      value="Excellent
                "
                    >
                      5
                    </option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>Refers to latest developments in the field</h3>
                  <select name="cns12" id="cns12">
                    <option value="Bellow Average">1</option>
                    <option value="Average">2</option>
                    <option value="Good">3</option>
                    <option value="Very Good">4</option>
                    <option
                      value="Excellent
                "
                    >
                      5
                    </option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>Uses of teaching aids (OHP/Blackboard /PPT's)</h3>
                  <select name="cns13" id="cns13">
                    <option value="Bellow Average">1</option>
                    <option value="Average">2</option>
                    <option value="Good">3</option>
                    <option value="Very Good">4</option>
                    <option
                      value="Excellent
                "
                    >
                      5
                    </option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>
                    Blackboard/Whiteboard work in terms of legibility,
                    visibility and structure
                  </h3>
                  <select name="cns14" id="cns14">
                    <option value="Bellow Average">1</option>
                    <option value="Average">2</option>
                    <option value="Good">3</option>
                    <option value="Very Good">4</option>
                    <option
                      value="Excellent
                "
                    >
                      5
                    </option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>Uses of innovative teaching methods</h3>
                  <select name="cns15" id="cns15">
                    <option value="Bellow Average">1</option>
                    <option value="Average">2</option>
                    <option value="Good">3</option>
                    <option value="Very Good">4</option>
                    <option
                      value="Excellent
                "
                    >
                      5
                    </option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>
                    Shares the answers of class tests or sessional test
                    questions after the conduct of the class tests/sessional
                    tests.
                  </h3>
                  <select name="cns16" id="cns16">
                    <option value="Bellow Average">1</option>
                    <option value="Average">2</option>
                    <option value="Good">3</option>
                    <option value="Very Good">4</option>
                    <option
                      value="Excellent
                "
                    >
                      5
                    </option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>
                    Shows the evaluated answer books of class tests to the
                    students
                  </h3>
                  <select name="cns17" id="cns17">
                    <option value="Bellow Average">1</option>
                    <option value="Average">2</option>
                    <option value="Good">3</option>
                    <option value="Very Good">4</option>
                    <option
                      value="Excellent
                "
                    >
                      5
                    </option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>Makes sure that he/she is being understood</h3>
                  <select name="cns18" id="cns18">
                    <option value="Bellow Average">1</option>
                    <option value="Average">2</option>
                    <option value="Good">3</option>
                    <option value="Very Good">4</option>
                    <option
                      value="Excellent
                "
                    >
                      5
                    </option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>
                    Helping approach towards varied academic interests of
                    students
                  </h3>
                  <select name="cns19" id="cns19">
                    <option value="Bellow Average">1</option>
                    <option value="Average">2</option>
                    <option value="Good">3</option>
                    <option value="Very Good">4</option>
                    <option
                      value="Excellent
                "
                    >
                      5
                    </option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>
                    Helps student in providing study material which is not
                    readily available in the text books say through e-resources,
                    e-journals, reference books, open course wares etc.
                  </h3>
                  <select name="cns20" id="cns20">
                    <option value="Bellow Average">1</option>
                    <option value="Average">2</option>
                    <option value="Good">3</option>
                    <option value="Very Good">4</option>
                    <option
                      value="Excellent
                "
                    >
                      5
                    </option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>
                    Helps students irrespective of ethnicity and
                    culture/background
                  </h3>
                  <select name="cns21" id="cns21">
                    <option value="Bellow Average">1</option>
                    <option value="Average">2</option>
                    <option value="Good">3</option>
                    <option value="Very Good">4</option>
                    <option
                      value="Excellent
                "
                    >
                      5
                    </option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>Helps students irrespective of gender</h3>
                  <select name="cns22" id="cns22">
                    <option value="Bellow Average">1</option>
                    <option value="Average">2</option>
                    <option value="Good">3</option>
                    <option value="Very Good">4</option>
                    <option
                      value="Excellent
                "
                    >
                      5
                    </option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>
                    Helps students facing physical, emotional and learning
                    challenges
                  </h3>
                  <select name="cns23" id="cns23">
                    <option value="Bellow Average">1</option>
                    <option value="Average">2</option>
                    <option value="Good">3</option>
                    <option value="Very Good">4</option>
                    <option
                      value="Excellent
                "
                    >
                      5
                    </option>
                  </select>
                </div>
              </li>
            </ol>
            
            <button type="submit" className="submit-btn">Submit</button>
            
          </AccordionDetails>
        </Accordion>
      </form>
      {/* Form for Cloud Computing */}
      <form className="form" onSubmit={handleSubmitCC}>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Cloud Computing</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div className="item">
              <label htmlFor="name">Enter your name </label>
              <input type="text" name="name" id="name" required />
            </div>

            <div className="item">
              <label htmlFor="name">Enter your Register Number </label>
              <input type="number" name="regno" required />
            </div>

            <div className="item">
              <label htmlFor="name">Department </label>
              <input
                type="text"
                name="dept"
                disabled
                value="Computer Science & Engineering"
              />
            </div>

            <div className="item">
              <label htmlFor="name">Semester</label>
              <input type="text" disabled name="sem" value="7" />
            </div>
            <ol className="feedback-form">
              <li className="feedback-list">
                <div className="item">
                  <h3>Punctuality in the Class</h3>
                  <select name="cc1" id="cns1">
                    <option value="Bellow Average">1</option>
                    <option value="Average">2</option>
                    <option value="Good">3</option>
                    <option value="Very Good">4</option>
                    <option value="Excellent">5</option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>Regularity in taking Classes</h3>
                  <select name="cc2" id="cns2" required>
                    <option value="Bellow Average">1</option>
                    <option value="Average">2</option>
                    <option value="Good">3</option>
                    <option value="Very Good">4</option>
                    <option
                      value="Excellent
                "
                    >
                      5
                    </option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>Completes syllabus of the course in time</h3>
                  <select name="cc3" id="cns3">
                    <option value="Bellow Average">1</option>
                    <option value="Average">2</option>
                    <option value="Good">3</option>
                    <option value="Very Good">4</option>
                    <option
                      value="Excellent
                "
                    >
                      5
                    </option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>
                    Scheduled organization of assignments, class test, quizzes
                    and seminars
                  </h3>
                  <select name="cc4" id="cns4">
                    <option value="Bellow Average">1</option>
                    <option value="Average">2</option>
                    <option value="Good">3</option>
                    <option value="Very Good">4</option>
                    <option
                      value="Excellent
                "
                    >
                      5
                    </option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>Focus on Syllabi</h3>
                  <select name="cc5" id="cns5">
                    <option value="Bellow Average">1</option>
                    <option value="Average">2</option>
                    <option value="Good">3</option>
                    <option value="Very Good">4</option>
                    <option
                      value="Excellent
                "
                    >
                      5
                    </option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>Self-confidence</h3>
                  <select name="cc6" id="cns6">
                    <option value="Bellow Average">1</option>
                    <option value="Average">2</option>
                    <option value="Good">3</option>
                    <option value="Very Good">4</option>
                    <option
                      value="Excellent
                "
                    >
                      5
                    </option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>Communication skills</h3>
                  <select name="cc7" id="cns7">
                    <option value="Bellow Average">1</option>
                    <option value="Average">2</option>
                    <option value="Good">3</option>
                    <option value="Very Good">4</option>
                    <option
                      value="Excellent
                "
                    >
                      5
                    </option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>Conducting the classroom discussions</h3>
                  <select name="cc8" id="cns8">
                    <option value="Bellow Average">1</option>
                    <option value="Average">2</option>
                    <option value="Good">3</option>
                    <option value="Very Good">4</option>
                    <option
                      value="Excellent
                "
                    >
                      5
                    </option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>Teaching the subject matter</h3>
                  <select name="cc9" id="cns9">
                    <option value="Bellow Average">1</option>
                    <option value="Average">2</option>
                    <option value="Good">3</option>
                    <option value="Very Good">4</option>
                    <option
                      value="Excellent
                "
                    >
                      5
                    </option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>Delivery of structured lecture</h3>
                  <select name="cc10" id="cns10">
                    <option value="Bellow Average">1</option>
                    <option value="Average">2</option>
                    <option value="Good">3</option>
                    <option value="Very Good">4</option>
                    <option
                      value="Excellent
                "
                    >
                      5
                    </option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>
                    Skill of linking subject to life experience & creating
                    interest in the subject
                  </h3>
                  <select name="cc11" id="cns11">
                    <option value="Bellow Average">1</option>
                    <option value="Average">2</option>
                    <option value="Good">3</option>
                    <option value="Very Good">4</option>
                    <option
                      value="Excellent
                "
                    >
                      5
                    </option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>Refers to latest developments in the field</h3>
                  <select name="cc12" id="cns12">
                    <option value="Bellow Average">1</option>
                    <option value="Average">2</option>
                    <option value="Good">3</option>
                    <option value="Very Good">4</option>
                    <option
                      value="Excellent
                "
                    >
                      5
                    </option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>Uses of teaching aids (OHP/Blackboard /PPT's)</h3>
                  <select name="cc13" id="cns13">
                    <option value="Bellow Average">1</option>
                    <option value="Average">2</option>
                    <option value="Good">3</option>
                    <option value="Very Good">4</option>
                    <option
                      value="Excellent
                "
                    >
                      5
                    </option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>
                    Blackboard/Whiteboard work in terms of legibility,
                    visibility and structure
                  </h3>
                  <select name="cc14" id="cns14">
                    <option value="Bellow Average">1</option>
                    <option value="Average">2</option>
                    <option value="Good">3</option>
                    <option value="Very Good">4</option>
                    <option
                      value="Excellent
                "
                    >
                      5
                    </option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>Uses of innovative teaching methods</h3>
                  <select name="cc15" id="cns15">
                    <option value="Bellow Average">1</option>
                    <option value="Average">2</option>
                    <option value="Good">3</option>
                    <option value="Very Good">4</option>
                    <option
                      value="Excellent
                "
                    >
                      5
                    </option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>
                    Shares the answers of class tests or sessional test
                    questions after the conduct of the class tests/sessional
                    tests.
                  </h3>
                  <select name="cc16" id="cns16">
                    <option value="Bellow Average">1</option>
                    <option value="Average">2</option>
                    <option value="Good">3</option>
                    <option value="Very Good">4</option>
                    <option
                      value="Excellent
                "
                    >
                      5
                    </option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>
                    Shows the evaluated answer books of class tests to the
                    students
                  </h3>
                  <select name="cc17" id="cns17">
                    <option value="Bellow Average">1</option>
                    <option value="Average">2</option>
                    <option value="Good">3</option>
                    <option value="Very Good">4</option>
                    <option
                      value="Excellent
                "
                    >
                      5
                    </option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>Makes sure that he/she is being understood</h3>
                  <select name="cc18" id="cns18">
                    <option value="Bellow Average">1</option>
                    <option value="Average">2</option>
                    <option value="Good">3</option>
                    <option value="Very Good">4</option>
                    <option
                      value="Excellent
                "
                    >
                      5
                    </option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>
                    Helping approach towards varied academic interests of
                    students
                  </h3>
                  <select name="cc19" id="cns19">
                    <option value="Bellow Average">1</option>
                    <option value="Average">2</option>
                    <option value="Good">3</option>
                    <option value="Very Good">4</option>
                    <option
                      value="Excellent
                "
                    >
                      5
                    </option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>
                    Helps student in providing study material which is not
                    readily available in the text books say through e-resources,
                    e-journals, reference books, open course wares etc.
                  </h3>
                  <select name="cc20" id="cns20">
                    <option value="Bellow Average">1</option>
                    <option value="Average">2</option>
                    <option value="Good">3</option>
                    <option value="Very Good">4</option>
                    <option
                      value="Excellent
                "
                    >
                      5
                    </option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>
                    Helps students irrespective of ethnicity and
                    culture/background
                  </h3>
                  <select name="cc21" id="cns21">
                    <option value="Bellow Average">1</option>
                    <option value="Average">2</option>
                    <option value="Good">3</option>
                    <option value="Very Good">4</option>
                    <option
                      value="Excellent
                "
                    >
                      5
                    </option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>Helps students irrespective of gender</h3>
                  <select name="cc22" id="cns22">
                    <option value="Bellow Average">1</option>
                    <option value="Average">2</option>
                    <option value="Good">3</option>
                    <option value="Very Good">4</option>
                    <option
                      value="Excellent
                "
                    >
                      5
                    </option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>
                    Helps students facing physical, emotional and learning
                    challenges
                  </h3>
                  <select name="cc23" id="cns23">
                    <option value="Bellow Average">1</option>
                    <option value="Average">2</option>
                    <option value="Good">3</option>
                    <option value="Very Good">4</option>
                    <option
                      value="Excellent
                "
                    >
                      5
                    </option>
                  </select>
                </div>
              </li>
            </ol>
            <button type="submit"className="submit-btn">Submit</button>
          </AccordionDetails>
        </Accordion>
      </form>
      {/* Form for Disaster Management */}
      <form className="form" onSubmit={handleSubmitDM}>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Disaster Management</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div className="item">
              <label htmlFor="name">Enter your name </label>
              <input type="text" name="name" id="name" required />
            </div>

            <div className="item">
              <label htmlFor="name">Enter your Register Number </label>
              <input type="number" name="regno" required />
            </div>

            <div className="item">
              <label htmlFor="name">Department </label>
              <input
                type="text"
                name="dept"
                disabled
                value="Computer Science & Engineering"
              />
            </div>

            <div className="item">
              <label htmlFor="name">Semester</label>
              <input type="text" disabled name="sem" value="7" />
            </div>
            <ol className="feedback-form">
              <li className="feedback-list">
                <div className="item">
                  <h3>Punctuality in the Class</h3>
                  <select name="cc1" id="cns1">
                    <option value="Bellow Average">1</option>
                    <option value="Average">2</option>
                    <option value="Good">3</option>
                    <option value="Very Good">4</option>
                    <option value="Excellent">5</option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>Regularity in taking Classes</h3>
                  <select name="cc2" id="cns2" required>
                    <option value="Bellow Average">1</option>
                    <option value="Average">2</option>
                    <option value="Good">3</option>
                    <option value="Very Good">4</option>
                    <option
                      value="Excellent
                "
                    >
                      5
                    </option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>Completes syllabus of the course in time</h3>
                  <select name="cc3" id="cns3">
                    <option value="Bellow Average">1</option>
                    <option value="Average">2</option>
                    <option value="Good">3</option>
                    <option value="Very Good">4</option>
                    <option
                      value="Excellent
                "
                    >
                      5
                    </option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>
                    Scheduled organization of assignments, class test, quizzes
                    and seminars
                  </h3>
                  <select name="cc4" id="cns4">
                    <option value="Bellow Average">1</option>
                    <option value="Average">2</option>
                    <option value="Good">3</option>
                    <option value="Very Good">4</option>
                    <option
                      value="Excellent
                "
                    >
                      5
                    </option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>Focus on Syllabi</h3>
                  <select name="cc5" id="cns5">
                    <option value="Bellow Average">1</option>
                    <option value="Average">2</option>
                    <option value="Good">3</option>
                    <option value="Very Good">4</option>
                    <option
                      value="Excellent
                "
                    >
                      5
                    </option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>Self-confidence</h3>
                  <select name="cc6" id="cns6">
                    <option value="Bellow Average">1</option>
                    <option value="Average">2</option>
                    <option value="Good">3</option>
                    <option value="Very Good">4</option>
                    <option
                      value="Excellent
                "
                    >
                      5
                    </option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>Communication skills</h3>
                  <select name="cc7" id="cns7">
                    <option value="Bellow Average">1</option>
                    <option value="Average">2</option>
                    <option value="Good">3</option>
                    <option value="Very Good">4</option>
                    <option
                      value="Excellent
                "
                    >
                      5
                    </option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>Conducting the classroom discussions</h3>
                  <select name="cc8" id="cns8">
                    <option value="Bellow Average">1</option>
                    <option value="Average">2</option>
                    <option value="Good">3</option>
                    <option value="Very Good">4</option>
                    <option
                      value="Excellent
                "
                    >
                      5
                    </option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>Teaching the subject matter</h3>
                  <select name="cc9" id="cns9">
                    <option value="Bellow Average">1</option>
                    <option value="Average">2</option>
                    <option value="Good">3</option>
                    <option value="Very Good">4</option>
                    <option
                      value="Excellent
                "
                    >
                      5
                    </option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>Delivery of structured lecture</h3>
                  <select name="cc10" id="cns10">
                    <option value="Bellow Average">1</option>
                    <option value="Average">2</option>
                    <option value="Good">3</option>
                    <option value="Very Good">4</option>
                    <option
                      value="Excellent
                "
                    >
                      5
                    </option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>
                    Skill of linking subject to life experience & creating
                    interest in the subject
                  </h3>
                  <select name="cc11" id="cns11">
                    <option value="Bellow Average">1</option>
                    <option value="Average">2</option>
                    <option value="Good">3</option>
                    <option value="Very Good">4</option>
                    <option
                      value="Excellent
                "
                    >
                      5
                    </option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>Refers to latest developments in the field</h3>
                  <select name="cc12" id="cns12">
                    <option value="Bellow Average">1</option>
                    <option value="Average">2</option>
                    <option value="Good">3</option>
                    <option value="Very Good">4</option>
                    <option
                      value="Excellent
                "
                    >
                      5
                    </option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>Uses of teaching aids (OHP/Blackboard /PPT's)</h3>
                  <select name="cc13" id="cns13">
                    <option value="Bellow Average">1</option>
                    <option value="Average">2</option>
                    <option value="Good">3</option>
                    <option value="Very Good">4</option>
                    <option
                      value="Excellent
                "
                    >
                      5
                    </option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>
                    Blackboard/Whiteboard work in terms of legibility,
                    visibility and structure
                  </h3>
                  <select name="cc14" id="cns14">
                    <option value="Bellow Average">1</option>
                    <option value="Average">2</option>
                    <option value="Good">3</option>
                    <option value="Very Good">4</option>
                    <option
                      value="Excellent
                "
                    >
                      5
                    </option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>Uses of innovative teaching methods</h3>
                  <select name="cc15" id="cns15">
                    <option value="Bellow Average">1</option>
                    <option value="Average">2</option>
                    <option value="Good">3</option>
                    <option value="Very Good">4</option>
                    <option
                      value="Excellent
                "
                    >
                      5
                    </option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>
                    Shares the answers of class tests or sessional test
                    questions after the conduct of the class tests/sessional
                    tests.
                  </h3>
                  <select name="cc16" id="cns16">
                    <option value="Bellow Average">1</option>
                    <option value="Average">2</option>
                    <option value="Good">3</option>
                    <option value="Very Good">4</option>
                    <option
                      value="Excellent
                "
                    >
                      5
                    </option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>
                    Shows the evaluated answer books of class tests to the
                    students
                  </h3>
                  <select name="cc17" id="cns17">
                    <option value="Bellow Average">1</option>
                    <option value="Average">2</option>
                    <option value="Good">3</option>
                    <option value="Very Good">4</option>
                    <option
                      value="Excellent
                "
                    >
                      5
                    </option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>Makes sure that he/she is being understood</h3>
                  <select name="cc18" id="cns18">
                    <option value="Bellow Average">1</option>
                    <option value="Average">2</option>
                    <option value="Good">3</option>
                    <option value="Very Good">4</option>
                    <option
                      value="Excellent
                "
                    >
                      5
                    </option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>
                    Helping approach towards varied academic interests of
                    students
                  </h3>
                  <select name="cc19" id="cns19">
                    <option value="Bellow Average">1</option>
                    <option value="Average">2</option>
                    <option value="Good">3</option>
                    <option value="Very Good">4</option>
                    <option
                      value="Excellent
                "
                    >
                      5
                    </option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>
                    Helps student in providing study material which is not
                    readily available in the text books say through e-resources,
                    e-journals, reference books, open course wares etc.
                  </h3>
                  <select name="cc20" id="cns20">
                    <option value="Bellow Average">1</option>
                    <option value="Average">2</option>
                    <option value="Good">3</option>
                    <option value="Very Good">4</option>
                    <option
                      value="Excellent
                "
                    >
                      5
                    </option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>
                    Helps students irrespective of ethnicity and
                    culture/background
                  </h3>
                  <select name="cc21" id="cns21">
                    <option value="Bellow Average">1</option>
                    <option value="Average">2</option>
                    <option value="Good">3</option>
                    <option value="Very Good">4</option>
                    <option
                      value="Excellent
                "
                    >
                      5
                    </option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>Helps students irrespective of gender</h3>
                  <select name="cc22" id="cns22">
                    <option value="Bellow Average">1</option>
                    <option value="Average">2</option>
                    <option value="Good">3</option>
                    <option value="Very Good">4</option>
                    <option
                      value="Excellent
                "
                    >
                      5
                    </option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>
                    Helps students facing physical, emotional and learning
                    challenges
                  </h3>
                  <select name="cc23" id="cns23">
                    <option value="Bellow Average">1</option>
                    <option value="Average">2</option>
                    <option value="Good">3</option>
                    <option value="Very Good">4</option>
                    <option
                      value="Excellent
                "
                    >
                      5
                    </option>
                  </select>
                </div>
              </li>
            </ol>
            <button type="submit"className="submit-btn">Submit</button>
          </AccordionDetails>
        </Accordion>
      </form>
      {/* For for POM */}
      <form className="form" onSubmit={handleSubmitPOM}>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Principles of Management</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div className="item">
              <label htmlFor="name">Enter your name </label>
              <input type="text" name="name" id="name" required />
            </div>

            <div className="item">
              <label htmlFor="name">Enter your Register Number </label>
              <input type="number" name="regno" required />
            </div>

            <div className="item">
              <label htmlFor="name">Department </label>
              <input
                type="text"
                name="dept"
                disabled
                value="Computer Science & Engineering"
              />
            </div>

            <div className="item">
              <label htmlFor="name">Semester</label>
              <input type="text" disabled name="sem" value="7" />
            </div>
            <ol className="feedback-form">
              <li className="feedback-list">
                <div className="item">
                  <h3>Punctuality in the Class</h3>
                  <select name="cc1" id="cns1">
                    <option value="Bellow Average">1</option>
                    <option value="Average">2</option>
                    <option value="Good">3</option>
                    <option value="Very Good">4</option>
                    <option value="Excellent">5</option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>Regularity in taking Classes</h3>
                  <select name="cc2" id="cns2" required>
                    <option value="Bellow Average">1</option>
                    <option value="Average">2</option>
                    <option value="Good">3</option>
                    <option value="Very Good">4</option>
                    <option
                      value="Excellent
                "
                    >
                      5
                    </option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>Completes syllabus of the course in time</h3>
                  <select name="cc3" id="cns3">
                    <option value="Bellow Average">1</option>
                    <option value="Average">2</option>
                    <option value="Good">3</option>
                    <option value="Very Good">4</option>
                    <option
                      value="Excellent
                "
                    >
                      5
                    </option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>
                    Scheduled organization of assignments, class test, quizzes
                    and seminars
                  </h3>
                  <select name="cc4" id="cns4">
                    <option value="Bellow Average">1</option>
                    <option value="Average">2</option>
                    <option value="Good">3</option>
                    <option value="Very Good">4</option>
                    <option
                      value="Excellent
                "
                    >
                      5
                    </option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>Focus on Syllabi</h3>
                  <select name="cc5" id="cns5">
                    <option value="Bellow Average">1</option>
                    <option value="Average">2</option>
                    <option value="Good">3</option>
                    <option value="Very Good">4</option>
                    <option
                      value="Excellent
                "
                    >
                      5
                    </option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>Self-confidence</h3>
                  <select name="cc6" id="cns6">
                    <option value="Bellow Average">1</option>
                    <option value="Average">2</option>
                    <option value="Good">3</option>
                    <option value="Very Good">4</option>
                    <option
                      value="Excellent
                "
                    >
                      5
                    </option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>Communication skills</h3>
                  <select name="cc7" id="cns7">
                    <option value="Bellow Average">1</option>
                    <option value="Average">2</option>
                    <option value="Good">3</option>
                    <option value="Very Good">4</option>
                    <option
                      value="Excellent
                "
                    >
                      5
                    </option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>Conducting the classroom discussions</h3>
                  <select name="cc8" id="cns8">
                    <option value="Bellow Average">1</option>
                    <option value="Average">2</option>
                    <option value="Good">3</option>
                    <option value="Very Good">4</option>
                    <option
                      value="Excellent
                "
                    >
                      5
                    </option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>Teaching the subject matter</h3>
                  <select name="cc9" id="cns9">
                    <option value="Bellow Average">1</option>
                    <option value="Average">2</option>
                    <option value="Good">3</option>
                    <option value="Very Good">4</option>
                    <option
                      value="Excellent
                "
                    >
                      5
                    </option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>Delivery of structured lecture</h3>
                  <select name="cc10" id="cns10">
                    <option value="Bellow Average">1</option>
                    <option value="Average">2</option>
                    <option value="Good">3</option>
                    <option value="Very Good">4</option>
                    <option
                      value="Excellent
                "
                    >
                      5
                    </option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>
                    Skill of linking subject to life experience & creating
                    interest in the subject
                  </h3>
                  <select name="cc11" id="cns11">
                    <option value="Bellow Average">1</option>
                    <option value="Average">2</option>
                    <option value="Good">3</option>
                    <option value="Very Good">4</option>
                    <option
                      value="Excellent
                "
                    >
                      5
                    </option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>Refers to latest developments in the field</h3>
                  <select name="cc12" id="cns12">
                    <option value="Bellow Average">1</option>
                    <option value="Average">2</option>
                    <option value="Good">3</option>
                    <option value="Very Good">4</option>
                    <option
                      value="Excellent
                "
                    >
                      5
                    </option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>Uses of teaching aids (OHP/Blackboard /PPT's)</h3>
                  <select name="cc13" id="cns13">
                    <option value="Bellow Average">1</option>
                    <option value="Average">2</option>
                    <option value="Good">3</option>
                    <option value="Very Good">4</option>
                    <option
                      value="Excellent
                "
                    >
                      5
                    </option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>
                    Blackboard/Whiteboard work in terms of legibility,
                    visibility and structure
                  </h3>
                  <select name="cc14" id="cns14">
                    <option value="Bellow Average">1</option>
                    <option value="Average">2</option>
                    <option value="Good">3</option>
                    <option value="Very Good">4</option>
                    <option
                      value="Excellent
                "
                    >
                      5
                    </option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>Uses of innovative teaching methods</h3>
                  <select name="cc15" id="cns15">
                    <option value="Bellow Average">1</option>
                    <option value="Average">2</option>
                    <option value="Good">3</option>
                    <option value="Very Good">4</option>
                    <option
                      value="Excellent
                "
                    >
                      5
                    </option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>
                    Shares the answers of class tests or sessional test
                    questions after the conduct of the class tests/sessional
                    tests.
                  </h3>
                  <select name="cc16" id="cns16">
                    <option value="Bellow Average">1</option>
                    <option value="Average">2</option>
                    <option value="Good">3</option>
                    <option value="Very Good">4</option>
                    <option
                      value="Excellent
                "
                    >
                      5
                    </option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>
                    Shows the evaluated answer books of class tests to the
                    students
                  </h3>
                  <select name="cc17" id="cns17">
                    <option value="Bellow Average">1</option>
                    <option value="Average">2</option>
                    <option value="Good">3</option>
                    <option value="Very Good">4</option>
                    <option
                      value="Excellent
                "
                    >
                      5
                    </option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>Makes sure that he/she is being understood</h3>
                  <select name="cc18" id="cns18">
                    <option value="Bellow Average">1</option>
                    <option value="Average">2</option>
                    <option value="Good">3</option>
                    <option value="Very Good">4</option>
                    <option
                      value="Excellent
                "
                    >
                      5
                    </option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>
                    Helping approach towards varied academic interests of
                    students
                  </h3>
                  <select name="cc19" id="cns19">
                    <option value="Bellow Average">1</option>
                    <option value="Average">2</option>
                    <option value="Good">3</option>
                    <option value="Very Good">4</option>
                    <option
                      value="Excellent
                "
                    >
                      5
                    </option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>
                    Helps student in providing study material which is not
                    readily available in the text books say through e-resources,
                    e-journals, reference books, open course wares etc.
                  </h3>
                  <select name="cc20" id="cns20">
                    <option value="Bellow Average">1</option>
                    <option value="Average">2</option>
                    <option value="Good">3</option>
                    <option value="Very Good">4</option>
                    <option
                      value="Excellent
                "
                    >
                      5
                    </option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>
                    Helps students irrespective of ethnicity and
                    culture/background
                  </h3>
                  <select name="cc21" id="cns21">
                    <option value="Bellow Average">1</option>
                    <option value="Average">2</option>
                    <option value="Good">3</option>
                    <option value="Very Good">4</option>
                    <option
                      value="Excellent
                "
                    >
                      5
                    </option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>Helps students irrespective of gender</h3>
                  <select name="cc22" id="cns22">
                    <option value="Bellow Average">1</option>
                    <option value="Average">2</option>
                    <option value="Good">3</option>
                    <option value="Very Good">4</option>
                    <option
                      value="Excellent
                "
                    >
                      5
                    </option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>
                    Helps students facing physical, emotional and learning
                    challenges
                  </h3>
                  <select name="cc23" id="cns23">
                    <option value="Bellow Average">1</option>
                    <option value="Average">2</option>
                    <option value="Good">3</option>
                    <option value="Very Good">4</option>
                    <option
                      value="Excellent
                "
                    >
                      5
                    </option>
                  </select>
                </div>
              </li>
            </ol>
            <button type="submit"className="submit-btn">Submit</button>
          </AccordionDetails>
        </Accordion>
      </form>
      {/* Form for ET */}
      <form className="form" onSubmit={handleSubmitET}>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Energy Technology</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div className="item">
              <label htmlFor="name">Enter your name </label>
              <input type="text" name="name" id="name" required />
            </div>

            <div className="item">
              <label htmlFor="name">Enter your Register Number </label>
              <input type="number" name="regno" required />
            </div>

            <div className="item">
              <label htmlFor="name">Department </label>
              <input
                type="text"
                name="dept"
                disabled
                value="Computer Science & Engineering"
              />
            </div>

            <div className="item">
              <label htmlFor="name">Semester</label>
              <input type="text" disabled name="sem" value="7" />
            </div>
            <ol className="feedback-form">
              <li className="feedback-list">
                <div className="item">
                  <h3>Punctuality in the Class</h3>
                  <select name="cc1" id="cns1">
                    <option value="Bellow Average">1</option>
                    <option value="Average">2</option>
                    <option value="Good">3</option>
                    <option value="Very Good">4</option>
                    <option value="Excellent">5</option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>Regularity in taking Classes</h3>
                  <select name="cc2" id="cns2" required>
                    <option value="Bellow Average">1</option>
                    <option value="Average">2</option>
                    <option value="Good">3</option>
                    <option value="Very Good">4</option>
                    <option
                      value="Excellent
                "
                    >
                      5
                    </option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>Completes syllabus of the course in time</h3>
                  <select name="cc3" id="cns3">
                    <option value="Bellow Average">1</option>
                    <option value="Average">2</option>
                    <option value="Good">3</option>
                    <option value="Very Good">4</option>
                    <option
                      value="Excellent
                "
                    >
                      5
                    </option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>
                    Scheduled organization of assignments, class test, quizzes
                    and seminars
                  </h3>
                  <select name="cc4" id="cns4">
                    <option value="Bellow Average">1</option>
                    <option value="Average">2</option>
                    <option value="Good">3</option>
                    <option value="Very Good">4</option>
                    <option
                      value="Excellent
                "
                    >
                      5
                    </option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>Focus on Syllabi</h3>
                  <select name="cc5" id="cns5">
                    <option value="Bellow Average">1</option>
                    <option value="Average">2</option>
                    <option value="Good">3</option>
                    <option value="Very Good">4</option>
                    <option
                      value="Excellent
                "
                    >
                      5
                    </option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>Self-confidence</h3>
                  <select name="cc6" id="cns6">
                    <option value="Bellow Average">1</option>
                    <option value="Average">2</option>
                    <option value="Good">3</option>
                    <option value="Very Good">4</option>
                    <option
                      value="Excellent
                "
                    >
                      5
                    </option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>Communication skills</h3>
                  <select name="cc7" id="cns7">
                    <option value="Bellow Average">1</option>
                    <option value="Average">2</option>
                    <option value="Good">3</option>
                    <option value="Very Good">4</option>
                    <option
                      value="Excellent
                "
                    >
                      5
                    </option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>Conducting the classroom discussions</h3>
                  <select name="cc8" id="cns8">
                    <option value="Bellow Average">1</option>
                    <option value="Average">2</option>
                    <option value="Good">3</option>
                    <option value="Very Good">4</option>
                    <option
                      value="Excellent
                "
                    >
                      5
                    </option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>Teaching the subject matter</h3>
                  <select name="cc9" id="cns9">
                    <option value="Bellow Average">1</option>
                    <option value="Average">2</option>
                    <option value="Good">3</option>
                    <option value="Very Good">4</option>
                    <option
                      value="Excellent
                "
                    >
                      5
                    </option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>Delivery of structured lecture</h3>
                  <select name="cc10" id="cns10">
                    <option value="Bellow Average">1</option>
                    <option value="Average">2</option>
                    <option value="Good">3</option>
                    <option value="Very Good">4</option>
                    <option
                      value="Excellent
                "
                    >
                      5
                    </option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>
                    Skill of linking subject to life experience & creating
                    interest in the subject
                  </h3>
                  <select name="cc11" id="cns11">
                    <option value="Bellow Average">1</option>
                    <option value="Average">2</option>
                    <option value="Good">3</option>
                    <option value="Very Good">4</option>
                    <option
                      value="Excellent
                "
                    >
                      5
                    </option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>Refers to latest developments in the field</h3>
                  <select name="cc12" id="cns12">
                    <option value="Bellow Average">1</option>
                    <option value="Average">2</option>
                    <option value="Good">3</option>
                    <option value="Very Good">4</option>
                    <option
                      value="Excellent
                "
                    >
                      5
                    </option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>Uses of teaching aids (OHP/Blackboard /PPT's)</h3>
                  <select name="cc13" id="cns13">
                    <option value="Bellow Average">1</option>
                    <option value="Average">2</option>
                    <option value="Good">3</option>
                    <option value="Very Good">4</option>
                    <option
                      value="Excellent
                "
                    >
                      5
                    </option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>
                    Blackboard/Whiteboard work in terms of legibility,
                    visibility and structure
                  </h3>
                  <select name="cc14" id="cns14">
                    <option value="Bellow Average">1</option>
                    <option value="Average">2</option>
                    <option value="Good">3</option>
                    <option value="Very Good">4</option>
                    <option
                      value="Excellent
                "
                    >
                      5
                    </option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>Uses of innovative teaching methods</h3>
                  <select name="cc15" id="cns15">
                    <option value="Bellow Average">1</option>
                    <option value="Average">2</option>
                    <option value="Good">3</option>
                    <option value="Very Good">4</option>
                    <option
                      value="Excellent
                "
                    >
                      5
                    </option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>
                    Shares the answers of class tests or sessional test
                    questions after the conduct of the class tests/sessional
                    tests.
                  </h3>
                  <select name="cc16" id="cns16">
                    <option value="Bellow Average">1</option>
                    <option value="Average">2</option>
                    <option value="Good">3</option>
                    <option value="Very Good">4</option>
                    <option
                      value="Excellent
                "
                    >
                      5
                    </option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>
                    Shows the evaluated answer books of class tests to the
                    students
                  </h3>
                  <select name="cc17" id="cns17">
                    <option value="Bellow Average">1</option>
                    <option value="Average">2</option>
                    <option value="Good">3</option>
                    <option value="Very Good">4</option>
                    <option
                      value="Excellent
                "
                    >
                      5
                    </option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>Makes sure that he/she is being understood</h3>
                  <select name="cc18" id="cns18">
                    <option value="Bellow Average">1</option>
                    <option value="Average">2</option>
                    <option value="Good">3</option>
                    <option value="Very Good">4</option>
                    <option
                      value="Excellent
                "
                    >
                      5
                    </option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>
                    Helping approach towards varied academic interests of
                    students
                  </h3>
                  <select name="cc19" id="cns19">
                    <option value="Bellow Average">1</option>
                    <option value="Average">2</option>
                    <option value="Good">3</option>
                    <option value="Very Good">4</option>
                    <option
                      value="Excellent
                "
                    >
                      5
                    </option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>
                    Helps student in providing study material which is not
                    readily available in the text books say through e-resources,
                    e-journals, reference books, open course wares etc.
                  </h3>
                  <select name="cc20" id="cns20">
                    <option value="Bellow Average">1</option>
                    <option value="Average">2</option>
                    <option value="Good">3</option>
                    <option value="Very Good">4</option>
                    <option
                      value="Excellent
                "
                    >
                      5
                    </option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>
                    Helps students irrespective of ethnicity and
                    culture/background
                  </h3>
                  <select name="cc21" id="cns21">
                    <option value="Bellow Average">1</option>
                    <option value="Average">2</option>
                    <option value="Good">3</option>
                    <option value="Very Good">4</option>
                    <option
                      value="Excellent
                "
                    >
                      5
                    </option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>Helps students irrespective of gender</h3>
                  <select name="cc22" id="cns22">
                    <option value="Bellow Average">1</option>
                    <option value="Average">2</option>
                    <option value="Good">3</option>
                    <option value="Very Good">4</option>
                    <option
                      value="Excellent
                "
                    >
                      5
                    </option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>
                    Helps students facing physical, emotional and learning
                    challenges
                  </h3>
                  <select name="cc23" id="cns23">
                    <option value="Bellow Average">1</option>
                    <option value="Average">2</option>
                    <option value="Good">3</option>
                    <option value="Very Good">4</option>
                    <option
                      value="Excellent
                "
                    >
                      5
                    </option>
                  </select>
                </div>
              </li>
            </ol>
            <button type="submit"className="submit-btn">Submit</button>
          </AccordionDetails>
        </Accordion>
      </form>
      {/* Form for CC Lab */}
      <form className="form" onSubmit={handleSubmitCC_LAB}>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Cloud Computing Laboratory</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div className="item">
              <label htmlFor="name">Enter your name </label>
              <input type="text" name="name" id="name" required />
            </div>

            <div className="item">
              <label htmlFor="name">Enter your Register Number </label>
              <input type="number" name="regno" required />
            </div>

            <div className="item">
              <label htmlFor="name">Department </label>
              <input
                type="text"
                name="dept"
                disabled
                value="Computer Science & Engineering"
              />
            </div>

            <div className="item">
              <label htmlFor="name">Semester</label>
              <input type="text" disabled name="sem" value="7" />
            </div>
            <ol className="feedback-form">
              <li className="feedback-list">
                <div className="item">
                  <h3>Punctuality in the Class</h3>
                  <select name="cc1" id="cns1">
                    <option value="Bellow Average">1</option>
                    <option value="Average">2</option>
                    <option value="Good">3</option>
                    <option value="Very Good">4</option>
                    <option value="Excellent">5</option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>Regularity in taking Classes</h3>
                  <select name="cc2" id="cns2" required>
                    <option value="Bellow Average">1</option>
                    <option value="Average">2</option>
                    <option value="Good">3</option>
                    <option value="Very Good">4</option>
                    <option
                      value="Excellent
                "
                    >
                      5
                    </option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>Completes syllabus of the course in time</h3>
                  <select name="cc3" id="cns3">
                    <option value="Bellow Average">1</option>
                    <option value="Average">2</option>
                    <option value="Good">3</option>
                    <option value="Very Good">4</option>
                    <option
                      value="Excellent
                "
                    >
                      5
                    </option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>
                    Scheduled organization of assignments, class test, quizzes
                    and seminars
                  </h3>
                  <select name="cc4" id="cns4">
                    <option value="Bellow Average">1</option>
                    <option value="Average">2</option>
                    <option value="Good">3</option>
                    <option value="Very Good">4</option>
                    <option
                      value="Excellent
                "
                    >
                      5
                    </option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>Focus on Syllabi</h3>
                  <select name="cc5" id="cns5">
                    <option value="Bellow Average">1</option>
                    <option value="Average">2</option>
                    <option value="Good">3</option>
                    <option value="Very Good">4</option>
                    <option
                      value="Excellent
                "
                    >
                      5
                    </option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>Self-confidence</h3>
                  <select name="cc6" id="cns6">
                    <option value="Bellow Average">1</option>
                    <option value="Average">2</option>
                    <option value="Good">3</option>
                    <option value="Very Good">4</option>
                    <option
                      value="Excellent
                "
                    >
                      5
                    </option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>Communication skills</h3>
                  <select name="cc7" id="cns7">
                    <option value="Bellow Average">1</option>
                    <option value="Average">2</option>
                    <option value="Good">3</option>
                    <option value="Very Good">4</option>
                    <option
                      value="Excellent
                "
                    >
                      5
                    </option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>Conducting the classroom discussions</h3>
                  <select name="cc8" id="cns8">
                    <option value="Bellow Average">1</option>
                    <option value="Average">2</option>
                    <option value="Good">3</option>
                    <option value="Very Good">4</option>
                    <option
                      value="Excellent
                "
                    >
                      5
                    </option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>Teaching the subject matter</h3>
                  <select name="cc9" id="cns9">
                    <option value="Bellow Average">1</option>
                    <option value="Average">2</option>
                    <option value="Good">3</option>
                    <option value="Very Good">4</option>
                    <option
                      value="Excellent
                "
                    >
                      5
                    </option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>Delivery of structured lecture</h3>
                  <select name="cc10" id="cns10">
                    <option value="Bellow Average">1</option>
                    <option value="Average">2</option>
                    <option value="Good">3</option>
                    <option value="Very Good">4</option>
                    <option
                      value="Excellent
                "
                    >
                      5
                    </option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>
                    Skill of linking subject to life experience & creating
                    interest in the subject
                  </h3>
                  <select name="cc11" id="cns11">
                    <option value="Bellow Average">1</option>
                    <option value="Average">2</option>
                    <option value="Good">3</option>
                    <option value="Very Good">4</option>
                    <option
                      value="Excellent
                "
                    >
                      5
                    </option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>Refers to latest developments in the field</h3>
                  <select name="cc12" id="cns12">
                    <option value="Bellow Average">1</option>
                    <option value="Average">2</option>
                    <option value="Good">3</option>
                    <option value="Very Good">4</option>
                    <option
                      value="Excellent
                "
                    >
                      5
                    </option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>Uses of teaching aids (OHP/Blackboard /PPT's)</h3>
                  <select name="cc13" id="cns13">
                    <option value="Bellow Average">1</option>
                    <option value="Average">2</option>
                    <option value="Good">3</option>
                    <option value="Very Good">4</option>
                    <option
                      value="Excellent
                "
                    >
                      5
                    </option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>
                    Blackboard/Whiteboard work in terms of legibility,
                    visibility and structure
                  </h3>
                  <select name="cc14" id="cns14">
                    <option value="Bellow Average">1</option>
                    <option value="Average">2</option>
                    <option value="Good">3</option>
                    <option value="Very Good">4</option>
                    <option
                      value="Excellent
                "
                    >
                      5
                    </option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>Uses of innovative teaching methods</h3>
                  <select name="cc15" id="cns15">
                    <option value="Bellow Average">1</option>
                    <option value="Average">2</option>
                    <option value="Good">3</option>
                    <option value="Very Good">4</option>
                    <option
                      value="Excellent
                "
                    >
                      5
                    </option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>
                    Shares the answers of class tests or sessional test
                    questions after the conduct of the class tests/sessional
                    tests.
                  </h3>
                  <select name="cc16" id="cns16">
                    <option value="Bellow Average">1</option>
                    <option value="Average">2</option>
                    <option value="Good">3</option>
                    <option value="Very Good">4</option>
                    <option
                      value="Excellent
                "
                    >
                      5
                    </option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>
                    Shows the evaluated answer books of class tests to the
                    students
                  </h3>
                  <select name="cc17" id="cns17">
                    <option value="Bellow Average">1</option>
                    <option value="Average">2</option>
                    <option value="Good">3</option>
                    <option value="Very Good">4</option>
                    <option
                      value="Excellent
                "
                    >
                      5
                    </option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>Makes sure that he/she is being understood</h3>
                  <select name="cc18" id="cns18">
                    <option value="Bellow Average">1</option>
                    <option value="Average">2</option>
                    <option value="Good">3</option>
                    <option value="Very Good">4</option>
                    <option
                      value="Excellent
                "
                    >
                      5
                    </option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>
                    Helping approach towards varied academic interests of
                    students
                  </h3>
                  <select name="cc19" id="cns19">
                    <option value="Bellow Average">1</option>
                    <option value="Average">2</option>
                    <option value="Good">3</option>
                    <option value="Very Good">4</option>
                    <option
                      value="Excellent
                "
                    >
                      5
                    </option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>
                    Helps student in providing study material which is not
                    readily available in the text books say through e-resources,
                    e-journals, reference books, open course wares etc.
                  </h3>
                  <select name="cc20" id="cns20">
                    <option value="Bellow Average">1</option>
                    <option value="Average">2</option>
                    <option value="Good">3</option>
                    <option value="Very Good">4</option>
                    <option
                      value="Excellent
                "
                    >
                      5
                    </option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>
                    Helps students irrespective of ethnicity and
                    culture/background
                  </h3>
                  <select name="cc21" id="cns21">
                    <option value="Bellow Average">1</option>
                    <option value="Average">2</option>
                    <option value="Good">3</option>
                    <option value="Very Good">4</option>
                    <option
                      value="Excellent
                "
                    >
                      5
                    </option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>Helps students irrespective of gender</h3>
                  <select name="cc22" id="cns22">
                    <option value="Bellow Average">1</option>
                    <option value="Average">2</option>
                    <option value="Good">3</option>
                    <option value="Very Good">4</option>
                    <option
                      value="Excellent
                "
                    >
                      5
                    </option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>
                    Helps students facing physical, emotional and learning
                    challenges
                  </h3>
                  <select name="cc23" id="cns23">
                    <option value="Bellow Average">1</option>
                    <option value="Average">2</option>
                    <option value="Good">3</option>
                    <option value="Very Good">4</option>
                    <option
                      value="Excellent
                "
                    >
                      5
                    </option>
                  </select>
                </div>
              </li>
            </ol>
            <button type="submit"className="submit-btn">Submit</button>
          </AccordionDetails>
        </Accordion>
      </form>
      {/* Form for NS Lab */}
      <form className="form" onSubmit={handleSubmitNS_LAB}>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Network Security Laboratory</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div className="item">
              <label htmlFor="name">Enter your name </label>
              <input type="text" name="name" id="name" required />
            </div>

            <div className="item">
              <label htmlFor="name">Enter your Register Number </label>
              <input type="number" name="regno" required />
            </div>

            <div className="item">
              <label htmlFor="name">Department </label>
              <input
                type="text"
                name="dept"
                disabled
                value="Computer Science & Engineering"
              />
            </div>

            <div className="item">
              <label htmlFor="name">Semester</label>
              <input type="text" disabled name="sem" value="7" />
            </div>
            <ol className="feedback-form">
              <li className="feedback-list">
                <div className="item">
                  <h3>Punctuality in the Class</h3>
                  <select name="cc1" id="cns1">
                    <option value="Bellow Average">1</option>
                    <option value="Average">2</option>
                    <option value="Good">3</option>
                    <option value="Very Good">4</option>
                    <option value="Excellent">5</option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>Regularity in taking Classes</h3>
                  <select name="cc2" id="cns2" required>
                    <option value="Bellow Average">1</option>
                    <option value="Average">2</option>
                    <option value="Good">3</option>
                    <option value="Very Good">4</option>
                    <option
                      value="Excellent
                "
                    >
                      5
                    </option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>Completes syllabus of the course in time</h3>
                  <select name="cc3" id="cns3">
                    <option value="Bellow Average">1</option>
                    <option value="Average">2</option>
                    <option value="Good">3</option>
                    <option value="Very Good">4</option>
                    <option
                      value="Excellent
                "
                    >
                      5
                    </option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>
                    Scheduled organization of assignments, class test, quizzes
                    and seminars
                  </h3>
                  <select name="cc4" id="cns4">
                    <option value="Bellow Average">1</option>
                    <option value="Average">2</option>
                    <option value="Good">3</option>
                    <option value="Very Good">4</option>
                    <option
                      value="Excellent
                "
                    >
                      5
                    </option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>Focus on Syllabi</h3>
                  <select name="cc5" id="cns5">
                    <option value="Bellow Average">1</option>
                    <option value="Average">2</option>
                    <option value="Good">3</option>
                    <option value="Very Good">4</option>
                    <option
                      value="Excellent
                "
                    >
                      5
                    </option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>Self-confidence</h3>
                  <select name="cc6" id="cns6">
                    <option value="Bellow Average">1</option>
                    <option value="Average">2</option>
                    <option value="Good">3</option>
                    <option value="Very Good">4</option>
                    <option
                      value="Excellent
                "
                    >
                      5
                    </option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>Communication skills</h3>
                  <select name="cc7" id="cns7">
                    <option value="Bellow Average">1</option>
                    <option value="Average">2</option>
                    <option value="Good">3</option>
                    <option value="Very Good">4</option>
                    <option
                      value="Excellent
                "
                    >
                      5
                    </option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>Conducting the classroom discussions</h3>
                  <select name="cc8" id="cns8">
                    <option value="Bellow Average">1</option>
                    <option value="Average">2</option>
                    <option value="Good">3</option>
                    <option value="Very Good">4</option>
                    <option
                      value="Excellent
                "
                    >
                      5
                    </option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>Teaching the subject matter</h3>
                  <select name="cc9" id="cns9">
                    <option value="Bellow Average">1</option>
                    <option value="Average">2</option>
                    <option value="Good">3</option>
                    <option value="Very Good">4</option>
                    <option
                      value="Excellent
                "
                    >
                      5
                    </option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>Delivery of structured lecture</h3>
                  <select name="cc10" id="cns10">
                    <option value="Bellow Average">1</option>
                    <option value="Average">2</option>
                    <option value="Good">3</option>
                    <option value="Very Good">4</option>
                    <option
                      value="Excellent
                "
                    >
                      5
                    </option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>
                    Skill of linking subject to life experience & creating
                    interest in the subject
                  </h3>
                  <select name="cc11" id="cns11">
                    <option value="Bellow Average">1</option>
                    <option value="Average">2</option>
                    <option value="Good">3</option>
                    <option value="Very Good">4</option>
                    <option
                      value="Excellent
                "
                    >
                      5
                    </option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>Refers to latest developments in the field</h3>
                  <select name="cc12" id="cns12">
                    <option value="Bellow Average">1</option>
                    <option value="Average">2</option>
                    <option value="Good">3</option>
                    <option value="Very Good">4</option>
                    <option
                      value="Excellent
                "
                    >
                      5
                    </option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>Uses of teaching aids (OHP/Blackboard /PPT's)</h3>
                  <select name="cc13" id="cns13">
                    <option value="Bellow Average">1</option>
                    <option value="Average">2</option>
                    <option value="Good">3</option>
                    <option value="Very Good">4</option>
                    <option
                      value="Excellent
                "
                    >
                      5
                    </option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>
                    Blackboard/Whiteboard work in terms of legibility,
                    visibility and structure
                  </h3>
                  <select name="cc14" id="cns14">
                    <option value="Bellow Average">1</option>
                    <option value="Average">2</option>
                    <option value="Good">3</option>
                    <option value="Very Good">4</option>
                    <option
                      value="Excellent
                "
                    >
                      5
                    </option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>Uses of innovative teaching methods</h3>
                  <select name="cc15" id="cns15">
                    <option value="Bellow Average">1</option>
                    <option value="Average">2</option>
                    <option value="Good">3</option>
                    <option value="Very Good">4</option>
                    <option
                      value="Excellent
                "
                    >
                      5
                    </option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>
                    Shares the answers of class tests or sessional test
                    questions after the conduct of the class tests/sessional
                    tests.
                  </h3>
                  <select name="cc16" id="cns16">
                    <option value="Bellow Average">1</option>
                    <option value="Average">2</option>
                    <option value="Good">3</option>
                    <option value="Very Good">4</option>
                    <option
                      value="Excellent
                "
                    >
                      5
                    </option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>
                    Shows the evaluated answer books of class tests to the
                    students
                  </h3>
                  <select name="cc17" id="cns17">
                    <option value="Bellow Average">1</option>
                    <option value="Average">2</option>
                    <option value="Good">3</option>
                    <option value="Very Good">4</option>
                    <option
                      value="Excellent
                "
                    >
                      5
                    </option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>Makes sure that he/she is being understood</h3>
                  <select name="cc18" id="cns18">
                    <option value="Bellow Average">1</option>
                    <option value="Average">2</option>
                    <option value="Good">3</option>
                    <option value="Very Good">4</option>
                    <option
                      value="Excellent
                "
                    >
                      5
                    </option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>
                    Helping approach towards varied academic interests of
                    students
                  </h3>
                  <select name="cc19" id="cns19">
                    <option value="Bellow Average">1</option>
                    <option value="Average">2</option>
                    <option value="Good">3</option>
                    <option value="Very Good">4</option>
                    <option
                      value="Excellent
                "
                    >
                      5
                    </option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>
                    Helps student in providing study material which is not
                    readily available in the text books say through e-resources,
                    e-journals, reference books, open course wares etc.
                  </h3>
                  <select name="cc20" id="cns20">
                    <option value="Bellow Average">1</option>
                    <option value="Average">2</option>
                    <option value="Good">3</option>
                    <option value="Very Good">4</option>
                    <option
                      value="Excellent
                "
                    >
                      5
                    </option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>
                    Helps students irrespective of ethnicity and
                    culture/background
                  </h3>
                  <select name="cc21" id="cns21">
                    <option value="Bellow Average">1</option>
                    <option value="Average">2</option>
                    <option value="Good">3</option>
                    <option value="Very Good">4</option>
                    <option
                      value="Excellent
                "
                    >
                      5
                    </option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>Helps students irrespective of gender</h3>
                  <select name="cc22" id="cns22">
                    <option value="Bellow Average">1</option>
                    <option value="Average">2</option>
                    <option value="Good">3</option>
                    <option value="Very Good">4</option>
                    <option
                      value="Excellent
                "
                    >
                      5
                    </option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>
                    Helps students facing physical, emotional and learning
                    challenges
                  </h3>
                  <select name="cc23" id="cns23">
                    <option value="Bellow Average">1</option>
                    <option value="Average">2</option>
                    <option value="Good">3</option>
                    <option value="Very Good">4</option>
                    <option
                      value="Excellent
                "
                    >
                      5
                    </option>
                  </select>
                </div>
              </li>
            </ol>
            <button type="submit"className="submit-btn">Submit</button>
          </AccordionDetails>
        </Accordion>
      </form>
    </div>
  );
};

export default CSEForm7B;
