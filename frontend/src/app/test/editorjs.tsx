// 'use client';

// import { useState } from 'react';
// import Editor from '@/components/custom-editor';
// import { OutputData } from '@editorjs/editorjs';

// export default function Home() {
//   const [editorData, setEditorData] = useState<OutputData | null>(null);

//   return (
//     <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
//       <div className="w-full max-w-3xl bg-white shadow-lg rounded-lg p-6">
//         <h1 className="text-3xl font-bold text-center mb-4 text-gray-800">Editor.js in Next.js</h1>
//         <Editor onChange={setEditorData} />
//         <h2 className="text-xl font-semibold mt-6">JSON Output:</h2>
//         <pre className="mt-2 p-3 bg-gray-200 rounded-lg text-sm overflow-x-auto">
//           {JSON.stringify(editorData, null, 2)}
//         </pre>
//       </div>
//     </div>
//   );
// }
