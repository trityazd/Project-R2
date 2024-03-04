import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p >
          <code className="font-mono font-bold"> 2. What do you want to learn or do more of at work? </code> <br></br>
         Learn new technical skills and software tools that is being used widely such as Salesforce, React, etc <br></br><br></br>

          <code className="font-mono font-bold"> 3.Describe how you solved a challenge or technical issue that you faced in a previous role.How did you determine that your solution was
successful? </code> <br></br>
   The client could not load GPS locations for their users within the application. It happens their users were using Citrix to access our software.
Client's IT was convinced it was not their firewall or the user's Citrix profile that was an issue.
However, after much investigation - going through all our internal resources I was able to find out that the application uses Google API to fetch and load the GPS location.
Also, went through past cases within Zendesk logged for similar issues. They all pointed out to reset the user's Citrix profile or request that It check the Firewall settings.
To confirm my findings and have the client convinced I had dev review client DB and check for issue within our application. They confirmed my analysis and findings were correct.
As a result client was suggested to check their Firewall settings and reset the user's Citrix profile and the issue was resolved.<br></br><br></br>

 <code className="font-mono font-bold"> 5. Imagine a customer writes in requesting help with a build issue on a framework or
technology that you've not seen before. How would you begin troubleshooting this and
what questions would you ask the customer to understand the situation better?</code> <br></br>          

-What is the issue exactly - Reprod steps
-Screenshots of the issue
-When did they start to experience problems with the application? Were there any changes/updates made recently that could have led the to issue?
-Look through internal resources (documentation on the technology, past tickets for similar issues logged) to seek more info on the framework/technology. Also, Google the info to learn about it, and probably check out some quick intro videos on the technology to understand it better that could then help me with troubleshooting.
-Get on-call (Zoom/Teams) with the customer if needed arises to learn more about the issue/application and how did arrive at the problem.
-Request remote connection or DB backup so I could troubleshoot the application for root cause analysis 
-Is there any troubleshooting actioned by the customer so far <br></br><br></br>

<code className="font-mono font-bold"> 6. The customer from question 5 replies to your response with the below:
“I’m so frustrated. I’ve been trying to make this work for hours and I just can’t figure it
out. It must be a platform issue so just fix it for me instead of asking me questions.”</code> <br></br>   

-It would be in the best interest of the customer to get on a quick Zoom call and discuss what has been done so far in my investigation, and what troubleshooting steps have been actioned.
Also, share with them the next steps in my action plan to proceed with the investigation. Based on the complexity and dependency of the issue (if Dev is required or not) give them a ballpark for ETA (over-promise, under-delivery)
This should give the customer assurance that I'm actively working on their issue and doing everything in my reach to have it resolved. <br></br><br></br>

<code className="font-mono font-bold"> 7. A customer writes in to the Helpdesk asking "How do I do a redirect from the /blog path
to https://example.com?" Please write a reply to the customer. Feel free to add any
information about your decision making process after the reply.</code> <br></br>   

The example below redirects requests to the path /blog from your site's root to the absolute path https://example.com?/vercel/vercel of an external site with a redirect status of 308: <br></br>
      redirects:
      "source": "/blog"
      "destination": "https://example.com?/vercel/vercel" <br></br>
        For Best Practices on redirects implementation please refer to our help page here : https://vercel.com/docs/edge-network/redirects
        Also, for more examples of how you could use redirects in your Vercel project please refer to our help guide here : https://vercel.com/docs/projects/project-configuration#legacy-redirects

          <code className="font-mono font-bold"> 8. A customer is creating a site and would like their project not to be indexed by search
engines. Please write a reply to the customer. Feel free to add any information about
your decision making process after the reply.</code> <br></br>   

Ideally, Vercel Preview Deployments are not indexed by search engines by default because the X-Robots-Tag HTTP header is set to noindex. However, if using a Custom Domain for your preview deployments the default behavior is to omit the X-Robots-Tag: noindex.<br></br>
To overcome this there are two ways of achieving this:<br></br>

1.You should first look to inject the response header using your framework's built-in methods.<br></br>
2.If you are not using a framework or your framework does not support injecting response headers, you may modify the Header object in your vercel.json file.<br></br>

Please click on the link : https://vercel.com/guides/are-vercel-preview-deployment-indexed-by-search-engines for more info on the code example snippet that can be used in each of the above 2 cases<br></br>
Note: The recommended approach would be injecting headers using your framework's built-in methods. And doing so through vercel.json should only be as a last resort and may lead to other problems.<br></br><br></br>

 <code className="font-mono font-bold"> 9.What do you think is one of the most common problems which customers ask Vercel for help with? How would you help customers to overcome common problems, short-term and long-term?</code> <br></br>

          Based on some of the past tickets logged(https://www.vercel-status.com/history) the Deployments being triggered from GitHub are queued or there is a delay in the overall deployment.
Also, could get tricky to find the info from the help page and guide section if the client does not use the correct keyword to search for relevant info. Hence they end up asking for support thereby increasing ticket volume and consuming support agents' time which could be dedicated to some other critical ticket/issue

If there is a help article/guide for the issue reported I would share this with the customer. If required I would also prepare a quick guide myself that can be used for future reference by the customer & shared internally by them for knowledge transfer..<br></br><br></br>

 <code className="font-mono font-bold"> 10. How could we improve or alter this familiarisation exercise?</code> <br></br>
          
          
          
</p>

        
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{" "}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>
 
  {/*    <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div> */}

     <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
       {/*      <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Docs{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Find in-depth information about Next.js features and API.
          </p>
        </a> */}

       {/*   <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Learn{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Learn about Next.js in an interactive course with&nbsp;quizzes!
          </p>
        </a> */}

       {/*    <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Templates{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Explore starter templates for Next.js.
          </p>
        </a> */}

       {/*    <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Deploy{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50 text-balance`}>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a> */}
       
      </div>
    </main>
  );
}
