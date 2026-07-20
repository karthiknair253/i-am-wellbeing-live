import React from "react";

const TrainingSchedule = () => {
  const data = [
    {
      week: "Week 1",
      title: "Basics of trauma",
      topics: [
        "Understanding trauma through the decades",
        "Trauma perspectives across the globe",
        "Adverse Childhood Experiences and its impact",
      ],
      noOfSessions: 2,
      totalHours: 4,
      tentativeDate: "15th June",
      timingAndDay: "10 am to 12 pm; Sunday",
      assignment: 1,
    },
    {
      week: "Week 2",
      title: "Basics of trauma",
      topics: [
        "Neuroscience of trauma and levels of safety",
        "Anatomy of survival",
        "Brain-body connection",
        "Levels of safety",
        "Imprint of trauma memories",
      ],
      noOfSessions: 2,
      totalHours: 4,
      tentativeDate: "21st June",
      timingAndDay: "10 am to 12 pm; Saturday",
      assignment: 1,
    },
    {
      week: "Week 3",
      title: "Basics of trauma",
      topics: ["Trauma-informed care", "Goals and Principles"],
      noOfSessions: 1,
      totalHours: 2,
      tentativeDate: "28th June",
      timingAndDay: "10 am to 12 pm; Saturday",
      assignment: 1,
    },
    {
      week: "Week 4",
      title: "Basics of trauma",
      topics: [
        "Trauma-informed counselling skills",
        "Adapting the trauma lens in practice",
        "Understanding client-therapist relationship",
        "Practical applications",
      ],
      noOfSessions: 2,
      totalHours: 4,
      tentativeDate: "5th July",
      timingAndDay: "10 am to 12 pm; Saturday",
      assignment: 1,
    },
    {
      week: "Week 5",
      title: "Basics of trauma",
      topics: [
        "Evidence based tools for processing trauma",
        "Orientation to Arts-Based Therapy (ABT)",
        "Introduction to somatic practices",
      ],
      noOfSessions: 5,
      totalHours: 10,
      tentativeDate: "12th July",
      timingAndDay: "10 am to 12 pm; Saturday",
    },
    {
      week: "Week 6",
      topics: [
        "Basics of Emotional Freedom Tapping (EFT)",
        "Mindfulness-based practices",
        "Non-violent communication",
      ],
      noOfSessions: 5,
      totalHours: 10,
      tentativeDate: "19th July",
      timingAndDay: "10 am to 12 pm; Saturday",
      assignment: 1,
    },
    {
      week: "Week 7",
      topics: [
        "Practical application and self care",
        "Roleplays",
        "Vicarious trauma and self care",
      ],
      noOfSessions: 3,
      totalHours: 6,
      tentativeDate: "2nd August",
      timingAndDay: "10 am to 12 pm; Saturday",
      assignment: 1,
    },
  ];

  return (
    <table className='bg-[#FFDE59] w-full text-center'>
      <thead>
        <tr>
          <th>Week</th>
          <th>Topics</th>
          <th>No. of sessions</th>
          <th>Total hours</th>
          <th>Tentative Date</th>
          <th>Timing and Day</th>
          <th>Assignment</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td className='border-2 border-black'>{item.week}</td>
            <td className='border-2 border-black'>
              <ul className=''>
                {item.topics.map((topic, topicIndex) => (
                  <li className='' key={topicIndex}>
                    {topic}
                  </li>
                ))}
              </ul>
            </td>
            <td className='border-2 border-black'>{item.noOfSessions}</td>
            <td className='border-2 border-black'>{item.totalHours}</td>
            <td className='border-2 border-black'>{item.tentativeDate}</td>
            <td className='border-2 border-black'>{item.timingAndDay}</td>
            <td className='border-2 border-black'>{item.assignment}</td>
          </tr>
        ))}
      </tbody>

      <tfoot>
      <tr>
      <td colSpan="4" className="text-center border-2 bg-[#029390] text-white border-black">Closing Ceremony</td>
      <td colSpan="3" className="text-center border-2 bg-[#029390] text-white border-black">December</td>
      </tr>
      </tfoot>
    </table>
  );
};

export default TrainingSchedule;
