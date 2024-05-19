const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send(`
    <div style="margin-left: auto;
    margin-right: auto;
    max-width: fit-content;">
    <p>name: Jedsada Chaivongsa</p>
    <p>id: 651300022</p>
    <div style="width:100%;">
    <img src="https://scontent.fbkk15-1.fna.fbcdn.net/v/t39.30808-6/421109036_8606582976024801_4482197431747812371_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=bTY_pBnqPDMQ7kNvgEYsz1v&_nc_ht=scontent.fbkk15-1.fna&oh=00_AYDowtkCYO3JD77xLxJrT6SMjd7MfqcbhqBoSZALA0SjmQ&oe=664F7BBC" >
    </div>
    
    <a href="/myresearch">MyResearch</a>
    <a href="/researchplan">My Research Plan</a>
    <a href="/rest/researchplan/">Rest My Research Plan</a>
    </div>
  `);
});

app.get("/myresearch", (req, res) => {
  res.send(`
    <p>This document presents a comparative analysis of open
source software used for load balancing in the realm of web
applications. The evaluated software includes HAProxy , Nginx,
and Traefik. The objective is to efficiently distribute resources
to backend or database servers within a cloud computing
infrastructure, ensuring optimal performance. The comparison
focuses on key performance metrics such as response time
and reliability, aligning with real world usage scenarios. The
outcomes aim to serve as a benchmark, aiding the selection of
the most suitable software according to usage patterns, and
guiding performance optimization efforts.
    </p>
    <a href="/">MyHome</a>
  `);
});


app.get("/researchplan", (req, res) => {
  res.send(`
  <div>
    <h2>My_Research_Plan</h2>

    <table border="1">
      <tr>
        <th></th>
        <th colspan="8">Month</th>
      </tr>
      <tr>
        <th>Research task</th>
        <th>October</th>
        <th>November</th>
        <th>December</th>
        <th>January</th>
        <th>Febuary</th>
        <th>March</th>
        <th>April</th>
        <th>May</th>
      </tr>
      <tr>
        <td>Understanding Load Balancer Problem</td>
        <td style="text-align: center;">&#10004;</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>Literature review</td>
        <td style="text-align: center;"></td>
        <td style="text-align: center;">&#10004;</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>Design Testing Architecture</td>
        <td></td>
        <td style="text-align: center;"></td>
        <td style="text-align: center;">&#10004;</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>Setup Architechture and Coding</td>
        <td></td>
        <td></td>
        <td style="text-align: center;"</td>
        <td style="text-align: center;">&#10004;</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>Testing with Jmeter</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td style="text-align: center;">&#10004;</td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>Summary testing result</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td style="text-align: center;">&#10004;</td>
        <td style="text-align: center;">&#10004;</td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>Summary Document</td>
        <td></td>
        <td></td>
        <td style="text-align: center;"></td>
        <td></td>
        <td></td>
        <td></td>
        <td style="text-align: center;">&#10004;</td>
        <td></td>
      </tr>
      <tr>
        <td>Conclusion</td>
        <td></td>
        <td></td>
        <td style="text-align: center;"></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td style="text-align: center;">&#10004;</td>
      </tr>
    </table>  
    <a href="/">MyHome</a>
  </div>
  `);
});



app.get("/rest/researchplan/", (req, res) => {
  const researchPlan = [
    {
      id: 1,
      description: "Understanding Load Balancer Problem",
      startDate: "2023-10-01",
      endDate: "2023-10-31"
    },
    {
      id: 2,
      description: "Literature review",
      startDate: "2023-11-01",
      endDate: "2023-11-30"
    },
    {
      id: 3,
      description: "Design Testing Architecture",
      startDate: "2023-12-01",
      endDate: "2023-12-31"
    },
    {
      id: 4,
      description: "Setup Architechture and Coding",
      startDate: "2024-01-01",
      endDate: "2024-01-31"
    },
    {
      id: 5,
      description: "Testing with Jmeter",
      startDate: "2024-02-01",
      endDate: "2024-02-15"
    },
    {
      id: 6,
      description: "Summary testing result",
      startDate: "2024-02-16",
      endDate: "2024-03-31"
    },
    {
      id: 7,
      description: "Summary Document",
      startDate: "2024-04-01",
      endDate: "2024-04-30"
    },
    {
      id: 8,
      description: "Conclusion",
      startDate: "2024-05-01",
      endDate: "2024-05-31"
    }
  ];

  res.json(researchPlan);
});

app.listen(8080);
