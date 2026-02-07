import { useScrollFade } from "@/hooks/useScrollFade";
export default function WhyYouMatter() {
  const ref = useScrollFade();
  return <section id="why-you" className="py-20 md:py-28">
      <div ref={ref} className="section-fade section-container">
        <h2 className="text-3xl md:text-4xl font-display font-medium text-foreground mb-10">
          Why You Matter to Me
        </h2>

        <div className="space-y-6 text-base md:text-lg font-body text-secondary-foreground leading-relaxed">
          <p className="">I have been naive before you. I thought i will just live my whole life single. When i met you in HELLOTALK. I was thinking with myself you are a kiddo.</p>

          <p>
            You're the person I think of when something small and good happens. Like when I
            hear a song that's just right, or when the weather does that thing in the evening
            where everything goes golden for a few minutes. I just think, "they'd like this."
            And that's it. That's the whole thought. But it happens all the time.
          </p>

          <p>
            I think what I appreciate most about you is that you don't try to be anything
            you're not. You're honest in a way that's rare. Not blunt or harsh — just clear.
            You say what you mean, and you mean what you say, and I don't have to guess.
            I can't tell you how much that matters to someone like me who overthinks everything.
          </p>

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