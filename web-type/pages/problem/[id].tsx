import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import supabase from '../../supabase';
import { definitions } from '../../types/database';

const Page = () => {
  const router = useRouter();
  const { id } = router.query;

  const [problem, setProblem] = useState();
  const [answers, setAnswers] = useState();
  const [selectedAnswerId, setSelectedAnswerId] = useState();

  useEffect(() => {
    setProblem();
    setAnswers();
    setSelectedAnswerId();
    (async () => {
      if (id) {
        let { data: problem } = await supabase
          .from('problem')
          .select('*')
          .eq('id', id);
        setProblem(problem[0]);

        let { data: answers } = await supabase
          .from('answers')
          .select('*')
          .eq('problem', id);
        setAnswers(answers);
      }
    })();
  }, [id]);
  console.log(problem, answers);
  const isCorrect =
    answers &&
    problem &&
    selectedAnswerId &&
    answers.find((a) => a.id === selectedAnswerId)?.isCorrect;
  return (
    <div>
      <div>문제 {id}번</div>
      {problem && answers ? (
        <div>
          <div>{problem.title}</div>
          <div>{problem.code}</div>
          <div>{problem.score}</div>
          {answers.map((answer) => (
            <div key={answer.id}>
              <button
                disabled={selectedAnswerId}
                onClick={() => {
                  setSelectedAnswerId(answer.id);
                }}
              >
                {answer.text}
              </button>
            </div>
          ))}
        </div>
      ) : (
        <div>로딩중</div>
      )}

      {selectedAnswerId ? (
        <>
          <div>{isCorrect ? '정답입니다.' : '오답입니다.'}</div>
          <div>{answers.find((a) => a.isCorrect)?.desc}</div>
          <button
            onClick={() => {
              if (id === '2') {
                router.push('/result');
              } else {
                router.push(`/problem/${parseInt(id as string) + 1}`);
              }
            }}
          >
            다음 문제로 가기
          </button>
        </>
      ) : null}
    </div>
  );
};
export default Page;
