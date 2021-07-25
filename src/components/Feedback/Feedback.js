import React, { useState } from 'react';
import FeedBackOptions from '../FeedbackOptions/FeedBackOptions';
import Statistics from '../Statistics/Statistics';
import Notification from '../Notification/Notification';
import Section from '../Section/Section';

export default function Feedback() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveFeedback = option => {
    switch (option) {
      case 'good':
        setGood(state => state + 1);
        break;

      case 'neutral':
        setNeutral(state => state + 1);
        break;

      case 'bad':
        setBad(state => state + 1);
        break;

      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    return good + bad + neutral;
  };

  const total = countTotalFeedback();

  const countPositiveFeedbackPercentage = () => {
    return total ? Math.floor((good / total) * 100) : 0;
  };

  const percent = countPositiveFeedbackPercentage();
  const stateArray = ['good', 'neutral', 'bad'];

  return (
    <>
      <Section title="Please leave feedback">
        <FeedBackOptions
          options={stateArray}
          onLeaveFeedback={onLeaveFeedback}
        />
      </Section>

      {total ? (
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            percent={percent}
          />
        </Section>
      ) : (
        <Notification message="No feedback given" />
      )}
    </>
  );
}

// class Feedback extends Component {
//   static defaultProps = {

//     initialValue: 0,
//   };

//   state = {
//     good: this.props.initialValue,
//     neutral: 0,
//     bad: 0,
//   };

//   onLeaveFeedback = option => {
//     this.setState(prevState => ({
//       [option]: prevState[option] + 1,
//     }));
//   };

//   countTotalFeedback = () => {
//     const { good, bad, neutral } = this.state;
//     return good + bad + neutral;
//   };

//   countPositiveFeedbackPercentage = () => {
//     const { good } = this.state;
//     const total = this.countTotalFeedback();
//     return total ? Math.floor((good / total) * 100) : 0;
//   };

//   render() {
//     const { good, neutral, bad } = this.state;
//     const total = this.countTotalFeedback();
//     const percent = this.countPositiveFeedbackPercentage();
//     const stateArray = Object.keys(this.state);

//     return (
//       <>
//         <Section title="Please leave feedback">
//           <FeedBackOptions
//             options={stateArray}
//             onLeaveFeedback={this.onLeaveFeedback}
//           />
//         </Section>

//         {total !== 0 ? (
//           <Section title="Statistics">
//             <Statistics
//               good={good}
//               neutral={neutral}
//               bad={bad}
//               total={total}
//               percent={percent}
//             />
//           </Section>
//         ) : (
//           <Notification message="No feedback given" />
//         )}
//       </>
//     );
//   }
// }

// export default Feedback;
