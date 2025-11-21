import React, { useState } from "react";

// Questions data
const questions = [
  {
    "id": 1,
    "question": "When factoring to reveal the roots of the equation x³ + 2x² − 9x − 18 = 0, which equations can be used?",
    "type": "multiple",
    "choices": [
      "I. x²(x + 2) − 9(x + 2) = 0",
      "II. x(x² − 9) + 2(x² − 9) = 0",
      "III. (x − 2)(x² − 9) = 0"
    ],
    "correct": [0, 1]
  },
  {
    "id": 2,
    "question": "How many negative solutions to the equation 2x³ − 4x² + 3x − 1 = 0 exist?",
    "type": "multiple",
    "choices": ["1", "2", "3", "0"],
    "correct": [3]
  },
  {
    "id": 3,
    "question": "The zeros of the function f(x) = x³ − 9x² are:",
    "type": "multiple",
    "choices": [
      "9, only",
      "0 and 9",
      "0 and 3, only",
      "−3, 0, and 3"
    ],
    "correct": [1]
  },
  {
    "id": 4,
    "question": "Which values of x are solutions of the equation x³ + x² − 2x = 0?",
    "type": "multiple",
    "choices": [
      "0, 1, 2",
      "0, 1, −2",
      "0, −1, 2",
      "0, −1, −2"
    ],
    "correct": [1]
  },
  {
    "id": 5,
    "question": "The zeros of the function f(x) = 2x³ + 12x − 10x² are:",
    "type": "multiple",
    "choices": [
      "{2, 3}",
      "{−1, 6}",
      "{0, 2, 3}",
      "{0, −1, 6}"
    ],
    "correct": [2]
  },
  {
    "id": 6,
    "question": "Given c(m) = m³ − 2m² + 4m − 8, the solution of c(m) = 0 is:",
    "type": "multiple",
    "choices": [
      "±2",
      "2, only",
      "2i, 2",
      "±2i, 2"
    ],
    "correct": [3]
  },
  {
    "id": 7,
    "question": "Evan graphed a cubic function, f(x) = ax³ + bx² + cx + d, and determined the roots of f(x) to be ±1 and 2. What is the value of b, if a = 1?",
    "type": "multiple",
    "choices": [
      "1",
      "2",
      "−1",
      "−2"
    ],
    "correct": [3]
  },
  {
    "id": 8,
    "question": "Which statement regarding polynomials and their zeros is true?",
    "type": "multiple",
    "choices": [
      "f(x) = (x² − 1)(x + a) has zeros of 1 and −a, only.",
      "f(x) = x³ − ax² + 16x − 16a has zeros of 4 and a, only.",
      "f(x) = (x² + 25)(x + a) has zeros of ±5 and −a.",
      "f(x) = x³ − ax² − 9x + 9a has zeros of ±3 and a."
    ],
    "correct": [3]
  },
  {
    "id": 9,
    "question": "What are the zeros of P(m) = (m² − 4)(m² + 1)?",
    "type": "multiple",
    "choices": [
      "2 and −2, only",
      "2, −2, and −4",
      "−4, i, and −i",
      "2, −2, i, and −i"
    ],
    "correct": [3]
  },
  {
    "id": 10,
    "question": "Given f(x) = x⁴ + x³ − 3x² + 9x − 108 and f(3) = 0, which values satisfy f(x) = 0?",
    "type": "multiple",
    "choices": [
      "−4, 3 only",
      "−3, 4 only",
      "±3i, −4, 3",
      "±3i, −3, 4"
    ],
    "correct": [2]
  },
  {
    "id": 11,
    "question": "The zeros for f(x) = x⁴ − 4x³ − 9x² + 36x are:",
    "type": "multiple",
    "choices": [
      "{0, ±3, 4}",
      "{0, 3, 4}",
      "{0, ±3, −4}",
      "{0, 3, −4}"
    ],
    "correct": [0]
  },
  {
    "id": 12,
    "question": "What is the solution set of the equation 3x⁵ − 48x = 0?",
    "type": "multiple",
    "choices": [
      "{0, ±2}",
      "{0, ±2, 3}",
      "{0, ±2, ±2i}",
      "{±2, ±2i}"
    ],
    "correct": [2]
  },
  {
    "id": 13,
    "question": "What are the zeros of s(x) = x⁴ − 9x² + 3x³ − 27x − 10x² + 90?",
    "type": "multiple",
    "choices": [
      "{−3, −2, 5}",
      "{−2, 3, 5}",
      "{−3, −2, 3, 5}",
      "{−5, −3, 2, 3}"
    ],
    "correct": [3]
  },
  {
    "id": 14,
    "question": "Given 3 is a root of f(x) = x⁴ − x³ − 21x² + 45x, what are the other unique roots of f(x)?",
    "type": "multiple",
    "choices": [
      "−5, only",
      "−5 and 0",
      "−3, 1 and 5",
      "−5, −3 and 0"
    ],
    "correct": [1]
  },
  {
    "id": 15,
    "question": "Determine algebraically the zeros of f(x) = 3x³ + 21x² + 36x.",
    "type": "short_text",
    "correct_answer": ["0", "-4", "-3"]
  },
  {
    "id": 16,
    "question": "Solve the equation 2x³ − x² − 8x + 4 = 0 algebraically for all values of x.",
    "type": "short_text",
    "correct_answer": ["2", "-2", "1/2", "0.5"]
  },
  {
    "id": 17,
    "question": "Algebraically determine the zeros of the function: r(x) = 3x³ + 12x² − 3x − 12.",
    "type": "short_text",
    "correct_answer": ["1", "-1", "-4"]
  },
  {
    "id": 18,
    "question": "Solve the equation 8x³ + 4x² − 18x − 9 = 0 algebraically for all values of x.",
    "type": "short_text",
    "correct_answer": ["-1/2", "-0.5", "3/2", "1.5", "-3/2", "-1.5"]
  },
  {
    "id": 19,
    "question": "Solve x³ + 5x² = 4x + 20 algebraically.",
    "type": "short_text",
    "correct_answer": ["-5", "2", "-2"]
  },
  {
    "id": 20,
    "question": "Solve algebraically for all values of x: x⁴ + 4x³ + 4x² = −16x.",
    "type": "short_text",
    "correct_answer": ["0", "-4", "2i", "-2i"]
  },
  {
    "id": 21,
    "question": "Solve, giving 4 roots, x⁴ − 13x² + 36 = 0.",
    "type": "short_text",
    "correct_answer": ["2", "-2", "3", "-3"]
  },
  {
    "id": 22,
    "question": "Solve: x⁴ − 3x² = 4 (Find 4 roots.)",
    "type": "short_text",
    "correct_answer": ["2", "-2", "i", "-i"]
  },
  {
    "id": 23,
    "question": "Solve: x⁴ + 4x² = 32. Find 4 roots.",
    "type": "short_text",
    "correct_answer": ["2", "-2", "2i", "-2i"]
  },
  {
    "id": 24,
    "question": "Find four roots of the following equation: 2x⁴ + 5x² = 207",
    "type": "short_text",
    "correct_answer": ["3", "-3"]
  },
  {
    "id": 25,
    "question": "Given z(x) = 6x³ + bx² − 52x + 15, z(2) = 35, and z(−5) = 0, algebraically determine all the zeros of z(x).",
    "type": "short_text",
    "correct_answer": ["-5", "3/2", "1.5", "1/3"]
  },
  {
    "id": 26,
    "question": "Denise is designing a storage box in the shape of a cube. Each side of the box has a length of 10 inches. She needs more room and decides to construct a larger box in the shape of a cube with a volume of 2,000 cubic inches. By how many inches, to the nearest tenth, should she increase the length of each side of the original box?",
    "type": "short_text",
    "correct_answer": ["2.6"]
  }
];

// TeamSetup Component
function TeamSetup({onStart}) {
  const [names, setNames] = useState(["", "", "", ""]);
  
  return (
    <div style={{textAlign: 'center', padding: '2em', maxWidth: '500px', margin: '0 auto'}}>
      <h1 style={{color: '#800000', marginBottom: '1em'}}>🦅 Niceville Polynomial Quest 🦅</h1>
      <h2 style={{color: '#800000', fontSize: '1.2em'}}>Enter Team Names (2-4 Teams)</h2>
      <div style={{margin: '2em 0'}}>
        {names.map((n, i) => (
          <input 
            key={i} 
            value={n} 
            placeholder={`Team ${i+1} name`}
            style={{
              display: 'block',
              width: '100%',
              padding: '0.8em',
              margin: '0.5em 0',
              border: '2px solid #800000',
              borderRadius: '8px',
              fontSize: '1em'
            }}
            onChange={e => {
              let copy = [...names];
              copy[i] = e.target.value;
              setNames(copy);
            }}
          />
        ))}
        <button 
          onClick={() => {
            const teamNames = names.filter(n => n.trim());
            if (teamNames.length >= 2) {
              onStart(teamNames);
            } else {
              alert('Please enter at least 2 team names!');
            }
          }}
          style={{
            marginTop: '1em',
            padding: '1em 2em',
            backgroundColor: '#800000',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            fontSize: '1.1em',
            cursor: 'pointer',
            fontWeight: 'bold'
          }}
        >
          Start Game
        </button>
      </div>
    </div>
  );
}

// GameBoard Component
function GameBoard({positions, teams}) {
  return (
    <div style={{padding: '1em'}}>
      <div style={{display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '1em'}}>
        {[...Array(21).keys()].map(num => {
          const teamsHere = teams.filter(t => positions[t] === num);
          let bgColor = '#fffbe9';
          let label = '';
          
          if (num === 5) { bgColor = '#d4edda'; label = '⭐ Bonus'; }
          if (num === 8) { bgColor = '#f8d7da'; label = '⚠️ Penalty'; }
          if (num === 12) { bgColor = '#d1ecf1'; label = '✈️ Eglin'; }
          if (num === 17) { bgColor = '#fff3cd'; label = '🎉 Festival'; }
          if (num === 20) { bgColor = '#ffd700'; label = '🏆 FINISH'; }
          
          return (
            <div 
              key={num}
              style={{
                border: '2px solid #800000',
                background: bgColor,
                padding: '0.8em',
                borderRadius: '8px',
                minWidth: '60px',
                textAlign: 'center',
                fontWeight: 'bold'
              }}
            >
              <div style={{fontSize: '1.2em', color: '#800000'}}>{num}</div>
              {label && <div style={{fontSize: '0.7em', color: '#555'}}>{label}</div>}
              {teamsHere.map(t => (
                <span 
                  key={t} 
                  style={{
                    display: 'inline-block',
                    color: '#800000',
                    fontWeight: 'bold',
                    fontSize: '1.3em',
                    margin: '0 2px'
                  }}
                >
                  {t[0]}
                </span>
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
}

// QuestionCard Component
function QuestionCard({question, onAnswer}) {
  const [selected, setSelected] = useState([]);
  const [entry, setEntry] = useState("");
  
  const handleSubmit = () => {
    let correct = false;
    
    if (question.type === "multiple") {
      correct = (selected.sort().join(",") === question.correct.sort().join(","));
    }
    
    if (question.type === "short_text") {
      const normalized = entry.trim().toLowerCase();
      correct = question.correct_answer.some(ans => 
        ans.toLowerCase() === normalized
      );
    }
    
    onAnswer(correct);
    setSelected([]);
    setEntry("");
  };
  
  return (
    <div style={{
      background: '#f0f0f0',
      padding: '1.6em',
      borderRadius: '9px',
      margin: '1.8em 0',
      border: '2px solid #800000'
    }}>
      <h3 style={{color: '#800000', marginBottom: '1em'}}>{question.question}</h3>
      
      {question.type === "multiple" && (
        <div>
          {question.choices.map((choice, idx) => (
            <label 
              key={idx}
              style={{
                display: 'block',
                padding: '0.5em',
                margin: '0.5em 0',
                cursor: 'pointer'
              }}
            >
              <input 
                type="checkbox"
                checked={selected.includes(idx)}
                onChange={() => {
                  setSelected(selected.includes(idx)
                    ? selected.filter(i => i !== idx)
                    : [...selected, idx]);
                }}
                style={{marginRight: '0.5em'}}
              />
              {choice}
            </label>
          ))}
        </div>
      )}
      
      {question.type === "short_text" && (
        <div>
          <input 
            value={entry} 
            onChange={e => setEntry(e.target.value)}
            placeholder="Type answer(s) here (separate with commas if multiple)"
            style={{
              width: '100%',
              padding: '0.8em',
              border: '2px solid #800000',
              borderRadius: '5px',
              fontSize: '1em'
            }}
            onKeyPress={e => {
              if (e.key === 'Enter') handleSubmit();
            }}
          />
          <p style={{fontSize: '0.8em', color: '#666', marginTop: '0.5em'}}>
            Tip: For fractions like 1/2, you can type "1/2" or "0.5"
          </p>
        </div>
      )}
      
      <button 
        onClick={handleSubmit}
        style={{
          marginTop: '1em',
          padding: '0.8em 2em',
          backgroundColor: '#800000',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          fontSize: '1em',
          cursor: 'pointer',
          fontWeight: 'bold'
        }}
      >
        Submit Answer
      </button>
    </div>
  );
}

// Main App Component
function App() {
  const [phase, setPhase] = useState("setup");
  const [teams, setTeams] = useState([]);
  const [positions, setPositions] = useState({});
  const [currentTeam, setCurrentTeam] = useState(0);
  const [questionIdx, setQuestionIdx] = useState(null);
  const [winner, setWinner] = useState(null);
  const [feedback, setFeedback] = useState(null);
  const [usedQuestions, setUsedQuestions] = useState([]);

  function startGame(teamNames) {
    setTeams(teamNames);
    let pos = {};
    teamNames.forEach(name => {
      pos[name] = 0;
    });
    setPositions(pos);
    setPhase("board");
  }

  function drawQuestion() {
    const availableIndices = questions
      .map((_, idx) => idx)
      .filter(idx => !usedQuestions.includes(idx));
    
    if (availableIndices.length === 0) {
      alert('All questions have been used! Starting over with fresh questions.');
      setUsedQuestions([]);
      const qIdx = Math.floor(Math.random() * questions.length);
      setQuestionIdx(qIdx);
      setUsedQuestions([qIdx]);
    } else {
      const randomIdx = Math.floor(Math.random() * availableIndices.length);
      const qIdx = availableIndices[randomIdx];
      setQuestionIdx(qIdx);
      setUsedQuestions([...usedQuestions, qIdx]);
    }
    
    setFeedback(null);
  }

  function handleAnswer(isCorrect) {
    let name = teams[currentTeam];
    let newPositions = {...positions};
    let moveSpaces = 2;
    const currentQuestion = questions[questionIdx];
    
    if (isCorrect) {
      newPositions[name] += moveSpaces;
      setFeedback(`✅ Correct! ${name} moves forward ${moveSpaces} spaces!`);
    } else {
      newPositions[name] = Math.max(0, newPositions[name] - moveSpaces);
      
      let correctAnswerText = "";
      if (currentQuestion.type === "multiple") {
        const correctChoices = currentQuestion.correct.map(idx => currentQuestion.choices[idx]);
        correctAnswerText = correctChoices.join(", ");
      } else if (currentQuestion.type === "short_text") {
        correctAnswerText = currentQuestion.correct_answer.slice(0, 3).join(", ");
      }
      
      setFeedback(`❌ Incorrect. ${name} moves back ${moveSpaces} spaces.\n\nCorrect answer: ${correctAnswerText}`);
    }
    
    setPositions(newPositions);
    setQuestionIdx(null);
    
    if (newPositions[name] >= 20) {
      setWinner(name);
      setPhase("done");
      return;
    }
    
    let nextTeam = (currentTeam + 1) % teams.length;
    setCurrentTeam(nextTeam);
  }

  if (phase === "setup") {
    return <TeamSetup onStart={startGame} />;
  }
  
  if (phase === "done") {
    return (
      <div style={{textAlign: 'center', marginTop: '4em'}}>
        <h2 style={{color: '#800000', fontSize: '3em'}}>🏆 Winner: {winner}! 🏆</h2>
        <p style={{fontSize: '1.5em', margin: '1em 0'}}>Congratulations, Eagles!</p>
        <button
          onClick={() => {
            setPhase("setup");
            setTeams([]);
            setPositions({});
            setCurrentTeam(0);
            setWinner(null);
            setUsedQuestions([]);
          }}
          style={{
            marginTop: '2em',
            padding: '1em 2em',
            backgroundColor: '#800000',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            fontSize: '1.1em',
            cursor: 'pointer',
            fontWeight: 'bold'
          }}
        >
          Play Again
        </button>
      </div>
    );
  }

  return (
    <div style={{padding: '1em', maxWidth: '1200px', margin: '0 auto'}}>
      <h1 style={{textAlign: 'center', color: '#800000'}}>🦅 Niceville Polynomial Quest 🦅</h1>
      
      <GameBoard positions={positions} teams={teams} />
      
      <div style={{margin: '2em 0', padding: '1em', background: '#fff', borderRadius: '8px', border: '2px solid #800000'}}>
        <h2 style={{color: '#800000'}}>Current Team: {teams[currentTeam]}</h2>
        
        {feedback && (
          <div style={{
            padding: '1em',
            margin: '1em 0',
            background: feedback.startsWith('✅') ? '#d4edda' : '#f8d7da',
            borderRadius: '5px',
            fontWeight: 'bold',
            whiteSpace: 'pre-line'
          }}>
            {feedback}
          </div>
        )}
        
        {!questionIdx && (
          <button 
            onClick={drawQuestion}
            style={{
              padding: '1em 2em',
              backgroundColor: '#800000',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              fontSize: '1.1em',
              cursor: 'pointer',
              fontWeight: 'bold'
            }}
          >
            Draw Question
          </button>
        )}
        
        {questionIdx !== null && (
          <QuestionCard
            question={questions[questionIdx]}
            onAnswer={handleAnswer}
          />
        )}
      </div>
      
      <div style={{marginTop: '2em'}}>
        <h3 style={{color: '#800000'}}>Scoreboard:</h3>
        {teams.map(t => (
          <div 
            key={t}
            style={{
              padding: '0.5em',
              margin: '0.3em 0',
              background: t === teams[currentTeam] ? '#fff3cd' : '#f8f9fa',
              borderRadius: '5px',
              fontWeight: t === teams[currentTeam] ? 'bold' : 'normal'
            }}
          >
            {t}: Position {positions[t]} {t === teams[currentTeam] && '← Current'}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;