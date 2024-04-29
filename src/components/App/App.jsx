import React, { Component } from "react";
import { useState, useEffect } from "react";
import Options from "../Options/Options";
import Feedback from "../Feedback/Feedback";
import Notification from "../Notification/Notification";
import css from "../App/App.module.css";
import Description from "../Description/Description";

function App() {
  const [feedback, setFeedback] = useState(() => {
    const feedbackState = {
      good: 0,
      neutral: 0,
      bad: 0,
    };

    const getFeedback = window.localStorage.getItem("saveFeedback");

    if (getFeedback !== null) {
      return JSON.parse(getFeedback);
    }

    return feedbackState;
  });

  useEffect(() => {
    const saveFeedback = window.localStorage.setItem(
      "saveFeedback",
      JSON.stringify(feedback)
    );
  }, [feedback]);

  const elOptions = Object.keys(feedback);

  const handleClick = (evt) => {
    updateFeedback(evt.target.name);
  };

  const updateFeedback = (feedbackType) => {
    setFeedback({ ...feedback, [feedbackType]: feedback[feedbackType] + 1 });
  };

  const reset = () => {
    setFeedback({ good: 0, neutral: 0, bad: 0 });
  };

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;

  const positiveFeedback =
    totalFeedback > 0 ? Math.round((feedback.good / totalFeedback) * 100) : 0;

  return (
    <div>
      <h1>Sip Happens Café</h1>
      <Description />
      <Options
        elOptions={elOptions}
        onClick={handleClick}
        totalFeedback={totalFeedback}
        reset={reset}
      />
      {totalFeedback === 0 ? (
        <Notification />
      ) : (
        <Feedback
          elOptions={elOptions}
          feedback={feedback}
          totalFeedback={totalFeedback}
          positiveFeedback={positiveFeedback}
        />
      )}
    </div>
  );
}

export default App;
