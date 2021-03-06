import type { MetaFunction } from "remix";

export const meta: MetaFunction = () => {
  return {
    title: "About Page",
    description: "Providing information about the project",
  };
};

export default function AboutPage() {
  return (
    <div className="py-6">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        <h1 className="text-2xl font-semibold text-slate-900" id="about-page">
          About Page
        </h1>
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        <div className="py-4">
          <div className="prose prose-lg prose-rose mx-auto mt-6">
            <p>
              The Civic Hackathon: Plowing Through the Data, Powered by AT&T is
              a partnership between the School of Information Studies (iSchool)
              at Syracuse University and the City of Syracuse to encourage
              community solutions to assist the City of Syracuse in addressing
              snow removal from the City's public roads.
            </p>

            <p>
              The Hackathon is designed to engage technologists, designers,
              developers, and anyone else who is interested to use their skills
              for social good.
            </p>

            <p>
              Every year, the City of Syracuse is covered with feet of snow and
              is often the snowiest place in the country.
            </p>

            <p>
              With all of that snow, plows need to clear the more than 400 miles
              of roads to ensure safe transportation for the community. For the
              first time, the City of Syracuse has released data from GPS
              trackers on its snowplows in the hopes that students and
              volunteers can help find useful information from the thousands of
              rows of data generated.
            </p>

            <p>
              For this hackathon, participants are challenged to create data
              visualizations, find interesting insights, and help City staff
              determine what they should look for from this data when it snows.
            </p>

            <p>
              For example, you could: Create an interactive, and easy to use map
              of where snowplows have been and what they have been doing; build
              a searchable tool so a user could see if their street had been
              plowed; show where and how much plowing happens during specific
              time periods or in certain locations; or build a route
              optimization tool for plows.
            </p>

            <p>
              Those are merely examples to provide an idea of possible projects,
              but participants are encouraged to think creatively and use the
              availabile data in any way they think helps the City realize its
              goal.
            </p>

            <p>
              Participants may form teams, or may compete as individuals. Cash
              prizes will be given for 1st ($3500), 2nd ($2000), and 3rd ($1500)
              place. Anyone is eligible to participate - you do not have to be a
              Syracuse University student to take part. Projects are due at
              11:59 PM on March 1st - via the submission link at the bottom of
              this page. Judging will take place after all entries are received,
              and winners will be notified by e-mail on Monday, March 5, and
              announced publicly at a ceremony on March 7. Judges will evaluate
              projects along the following critetia: Presentation, Idea
              Creativity, Sustainability, Impact, and Technical Quality.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
