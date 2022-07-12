import type { NextApiRequest } from 'next';
import { NextApiResponse } from 'next';
import chrome from 'chrome-aws-lambda';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { query } = req;

  const url = `https://badgebuddy.vercel.app/badge?${new URLSearchParams(
    // @ts-expect-error
    query,
  )}`;

  const browser = await chrome.puppeteer.launch({
    executablePath: await chrome.executablePath,
    args: chrome.args,
    headless: true,
    defaultViewport: {
      width: 600,
      height: 600,
    },
  });

  const page = await browser.newPage();

  await page.goto(url);

  await page.waitForSelector('#badge', {
    visible: true,
  });
  const badge = await page.$('#badge');

  const buffer = await badge.screenshot({
    type: 'png',
    encoding: 'base64',
    omitBackground: true,
  });

  await browser.close();

  res.setHeader('Content-Type', 'image/png');
  res.send(Buffer.from(buffer as string, 'base64'));
};

export default handler;
