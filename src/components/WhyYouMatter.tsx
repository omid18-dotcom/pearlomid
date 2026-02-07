import { useScrollFade } from "@/hooks/useScrollFade";
export default function WhyYouMatter() {
  const ref = useScrollFade();
  return <section id="why-you" className="py-20 md:py-28">
      <div ref={ref} className="section-fade section-container">
        <h2 className="text-3xl md:text-4xl font-display font-medium text-foreground mb-10">
          Why You Matter to Me
        </h2>

        <div className="space-y-6 text-base md:text-lg font-body text-secondary-foreground leading-relaxed">
          <p className="">I have been naive before you. I thought i will just live my whole life single. When i met you in HELLOTALK. I was thinking with myself you are a kiddo. I was annoying you so much. i annoyed you for a whole week. You understood the loneliness inside me. Instead of letting me go you stayed. You asked for my contact you were afraid if i delete hellotalk how will you fix me. your kind heart stayed and fixed my lonely heart.</p>

          <p className="">Hahaha you said you were making a groupchat. But all i saw was your phone number only. I tried to block you but you insisted you are not leaving you insisted to be friends. that was when i truly felt your warmth i felt my cold heart warming. I thought being cold will make you stay away from me. But you stayed.</p>

          <p className="">I didn't want to make you sad. I gave you a challange win 3/5 games in PLATO. I will accept our relationship and say Those 3 magical words. while playing i asked god please god show me a way. and i felt something in my heart my brain was saying win those 3 games my heart was saying lose those 3 games. I was competing with myself and my heart won. I said I love You 1st.</p>

          <p>
            You make things lighter. Not because you fix things or have all the answers, but
            because you're just… there. You listen. You show up. You remember the small things
            I mention once and never expect you to hold onto. But you do. You always do.
          </p>

          <p>
            There are days when everything feels a little too heavy, and I don't always know
            how to talk about it. But with you, I don't feel like I have to perform being okay.
            I can just be tired, or confused, or quiet, and you don't make it weird. You just
            sit with it. That kind of patience is something I'll never take for granted.
          </p>

          <p>
            And honestly? You've changed me. Not in some big, obvious way. But in the small
            shifts — the way I'm a little kinder to myself now, the way I believe a bit more
            that good people are real and not just something from books. You're proof of that.
            Just by being yourself.
          </p>

          <p className="text-muted-foreground italic">
            So yeah. You matter. More than I probably show. More than I probably say. But I
            wanted you to know it — really know it — at least today.
          </p>
        </div>
      </div>
    </section>;
}