import React, { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const compliments = [
  "I've got you with any production you need",
  "say the word, and you've got the beats",
  "I'm your guy",
];

const producerCompliments = [
  "I've got you with any melodies you need",
  "say the word, and you've got any help you might want",
  "I'm your guy",
];

const questionComments = [
  "I've got an honest question: you make this look too easy!! What's the secret to your success??",
  "I WISH I had your mind – your sauce dude!! What's the sauce??",
  'Dude this was so freakin good –– how long have you been writing??',
  "I'm not even gonna lie –– I'd really love to make a record with you man!! would you be down??",
];

const greetings = ['Howdy'];

export default function Message(props) {
  const [name, company, producer, comparison, song] = [
    props.name,
    props.company,
    props.producer,
    props.comparison,
    props.song,
  ];
  const compliment =
    compliments[Math.floor(Math.random() * compliments.length)];
  const producerCompliment =
    producerCompliments[Math.floor(Math.random() * compliments.length)];
  const greeting = greetings[Math.floor(Math.random() * greetings.length)];
  const questionComment =
    questionComments[Math.floor(Math.random() * questionComments.length)];
  const [copied, setCopied] = useState(false);

  let writerDM = `
        ${name} you got me hooked from your song ${song} –– yooooo you a hit maker! ${comparison}
    `;

  let anrDM = `
        ${greeting} ${name}!! My name is Addy, a young music producer! 
        You are an important figure in music, as I know you play an important role at ${company}!
        I also that know you're a busy person, but I'd REALLY love to write with one of your writers and send back a record to you!
        I'd love to put beats behind any voice memo ideas or hold sessions!
    `;

  let producerDM = `
        ${greeting} ${name}!! You're freakin dope and I'm a fan - you make music that ${comparison}! \n
        Let me know what I gotta do to produce tracks with you - if I gotta send off a link with my past productions, you ain’t said nothing but a word 🙏🏿
    `;

  let dm2 = `Let me know what I gotta do to produce tracks with you –– if I gotta send off a link with my past productions, you ain't said nothing but a word 🙏🏿 `;
  let producerDm2 = `No stress on responding ASAP – just know ${producerCompliment}!`;

  let questionComment1 = `
        ${name} ${questionComment}
    `;

  return (
    <div className='Message'>
      <strong>Comment:</strong>
      <CopyToClipboard text={questionComment1} onCopy={() => setCopied(true)}>
        <p>{questionComment1}</p>
      </CopyToClipboard>
      <strong>2 DMs</strong>
      {company !== '' ? (
        <CopyToClipboard text={anrDM} onCopy={() => setCopied(true)}>
          <p>{anrDM}</p>
        </CopyToClipboard>
      ) : producer !== '' ? (
        <CopyToClipboard text={producerDM} onCopy={() => setCopied(true)}>
          <p>{producerDM}</p>
        </CopyToClipboard>
      ) : (
        <CopyToClipboard text={writerDM} onCopy={() => setCopied(true)}>
          <p>{writerDM}</p>
        </CopyToClipboard>
      )}
      <br />
      {producer !== '' ? (
        <CopyToClipboard text={producerDm2} onCopy={() => setCopied(true)}>
          <p>{producerDm2}</p>
        </CopyToClipboard>
      ) : (
        <CopyToClipboard text={dm2} onCopy={() => setCopied(true)}>
          <p>{dm2}</p>
        </CopyToClipboard>
      )}

      {copied ? <span style={{ color: 'red' }}>Copied.</span> : null}
    </div>
  );
}
