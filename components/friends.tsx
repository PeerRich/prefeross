const friends = [
  {
    name: "Appsmith",
    description: "Build build custom software on top of your data.",
    href: "https://appsmith.com",
  },
  {
    name: "BoxyHQ",
    description:
      "BoxyHQ’s suite of APIs for security and privacy helps engineering teams build and ship compliant cloud applications faster.",
    href: "https://boxyhq.com",
  },
  {
    name: "Cal.com",
    description:
      "Cal.com is a scheduling tool that helps you schedule meetings without the back-and-forth emails.",
    href: "https://cal.com",
  },
  {
    name: "Crowd.dev",
    description:
      "Centralize community, product, and customer data to understand which companies are engaging with your open source project.",
    href: "https://crowd.dev",
  },
  {
    name: "Documenso",
    description:
      "The Open-Source DocuSign Alternative. We aim to earn your trust by enabling you to self-host the platform and examine its inner workings.",
    href: "https://documenso.com",
  },
  {
    name: "dyrector.io",
    description:
      "dyrector.io is an open-source continuous delivery & deployment platform with version management.",
    href: "https://dyrector.io",
  },
  {
    name: "Erxes",
    description:
      "The Open-Source HubSpot Alternative. A single XOS enables to create unique and life-changing experiences that work for all types of business.",
    href: "https://erxes.io",
  },
  {
    name: "Formbricks",
    description:
      "Survey granular user segments at any point in the user journey. Gather up to 6x more insights with targeted micro-surveys. All open-source.",
    href: "https://formbricks.com",
  },
  {
    name: "Ghostfolio",
    description:
      "Ghostfolio is a privacy-first, open source dashboard for your personal finances. Designed to simplify asset tracking and empower informed investment decisions.",
    href: "https://ghostfol.io",
  },
  {
    name: "GitWonk",
    description:
      "GitWonk is an open-source technical documentation tool, designed and built focusing on the developer experience.",
    href: "https://gitwonk.com",
  },
  {
    name: "Hanko",
    description:
      "Open-source authentication and user management for the passkey era. Integrated in minutes, for web and mobile apps.",
    href: "https://hanko.io",
  },
  {
    name: "Hook0",
    description:
      "Open-Source Webhooks-as-a-service (WaaS) that makes it easy for developers to send webhooks.",
    href: "https://hook0.com/",
  },
  {
    name: "HTMX",
    description:
      "HTMX is a dependency-free JavaScript library that allows you to access AJAX, CSS Transitions, WebSockets, and Server Sent Events directly in HTML.",
    href: "https://htmx.org",
  },
  {
    name: "Infisical",
    description:
      "Open source, end-to-end encrypted platform that lets you securely manage secrets and configs across your team, devices, and infrastructure.",
    href: "https://infisical.com",
  },
  {
    name: "Mockoon",
    description:
      "Mockoon is the easiest and quickest way to design and run mock REST APIs.",
    href: "https://mockoon.com",
  },
  {
    name: "Novu",
    description:
      "The open-source notification infrastructure for developers. Simple components and APIs for managing all communication channels in one place.",
    href: "https://novu.co",
  },
  {
    name: "OpenBB",
    description:
      "Democratizing investment research through an open source financial ecosystem. The OpenBB Terminal allows everyone to perform investment research, from everywhere.",
    href: "https://openbb.co",
  },
  {
    name: "OpenStatus",
    description: "Open-source monitoring platform with beautiful status pages",
    href: "https://openstatus.dev",
  },
  {
    name: "Papermark",
    description:
      "Open-Source Docsend Alternative to securely share documents with real-time analytics.",
    href: "https://papermark.io/",
  },
  {
    name: "Requestly",
    description:
      "Makes frontend development cycle 10x faster with API Client, Mock Server, Intercept & Modify HTTP Requests and Session Replays.",
    href: "https://requestly.io",
  },
  {
    name: "Rivet",
    description:
      "Open-source solution to deploy, scale, and operate your multiplayer game.",
    href: "https://rivet.gg",
  },
  {
    name: "Shelf.nu",
    description:
      "Open Source Asset and Equipment tracking software that lets you create QR asset labels, manage and overview your assets across locations.",
    href: "https://shelf.nu/",
  },
  {
    name: "Sniffnet",
    description:
      "Sniffnet is a network monitoring tool to help you easily keep track of your Internet traffic.",
    href: "https://sniffnet.net",
  },
  {
    name: "Tolgee",
    description: "Software localization from A to Z made really easy.",
    href: "https://tolgee.io",
  },
  {
    name: "Trigger.dev",
    description:
      "Create long-running Jobs directly in your codebase with features like API integrations, webhooks, scheduling and delays.",
    href: "https://trigger.dev",
  },
  {
    name: "Typebot",
    description:
      "Typebot gives you powerful blocks to create unique chat experiences. Embed them anywhere on your apps and start collecting results like magic.",
    href: "https://typebot.io",
  },
  {
    name: "Twenty",
    description:
      "A modern CRM offering the flexibility of open-source, advanced features and sleek design.",
    href: "https://twenty.com",
  },
  {
    name: "Webiny",
    description:
      "Open-source enterprise-grade serverless CMS. Own your data. Scale effortlessly. Customize everything.",
    href: "https://webiny.com",
  },
  {
    name: "Webstudio",
    description: "Webstudio is an open source alternative to Webflow",
    href: "https://webstudio.is",
  },
  {
    name: "Spark.NET",
    description:
      "The .NET Web Framework for Makers. Build production ready, full-stack web applications fast without sweating the small stuff.",
    href: "https://spark-framework.net",
  },
  {
    name: "Firecamp",
    description: "vscode for apis, open-source postman/insomnia alternative",
    href: "https://firecamp.io",
  },
];

export default async function Friends() {
  return (
    <div className="px-4 sm:px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-cal text-2xl font-bold text-zinc-900 mb-4">
          Companies that would be interested in your open source product
        </h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {friends.map((friend, index) => (
            <article
              key={index}
              className="flex flex-col border border-transparent [background:linear-gradient(theme(colors.zinc.50),theme(colors.zinc.50))_padding-box,linear-gradient(120deg,theme(colors.zinc.300),theme(colors.zinc.100),theme(colors.zinc.300))_border-box] rounded-lg"
            >
              <div className="grow flex flex-col px-5 py-6">
                <div>
                  <img
                    className="inline w-7 h-7 rounded-sm m-3"
                    alt={friend.name}
                    src={`https://www.google.com/s2/favicons?domain=${friend.href}&sz=256`}
                  />
                  <a
                    href={friend.href}
                    className="relative top-1 font-cal text-xl"
                  >
                    {friend.name}
                  </a>
                </div>
                <p className="mt-4 text-sm ">{friend.description}</p>
                <div className="mt-4">
                  <a
                    className="underline"
                    href={`mailto:oss@${friend.href.replace(
                      "https://",
                      ""
                    )}?subject=Prefer%20OSS%3A%20Let's%20replace&body=Hey%20${
                      friend.name
                    }%2C%20saw%20your%20listing%20on%20prefeross.com.%20We%20are%20building%20...%20and%20would%20love%20to%20replace%20...%20for%20you!%20Let%20me%20know%20if%20you%20wanna%20chat!%20`}
                  >
                    Sell to {friend.name}
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
