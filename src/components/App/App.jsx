import React, { Component } from "react";
import { useState, useEffect } from "react";
import Options from "../Options/Options";
import Feedback from "../Feedback/Feedback";
import Notification from "../Notification/Notification";
import css from "../App/App.module.css";

function App() {
  const [feedback, setFeedback] = useState(() => {
    const feedbackState = {
      good: 0,
      neutral: 0,
      bad: 0,
    };

    const getFeedback = window.localStorage.getItem("save - feedback");

    if (getFeedback !== null) {
      return JSON.parse(getFeedback);
    }

    return feedbackState;
  });

  useEffect(() => {
    const setFeedback = window.localStorage.setItem(
      "save - feedback",
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
    setFeedback({ ...feedback, good: 0, neutral: 0, bad: 0 });
  };

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const positiveFeedback = Math.round((feedback.good / totalFeedback) * 100);

  return (
    <div>
      <h1>Sip Happens Café</h1>
      <p>
        Please leave your feedback about our service by selecting one of the
        options below.
      </p>
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
