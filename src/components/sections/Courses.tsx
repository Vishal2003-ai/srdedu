import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Laptop, Code2 } from "lucide-react";

export default function Courses() {
  const courses = [
    {
      title: "CCC",
      desc: "Course on Computer Concepts – A government-recognized foundation in IT literacy.",
      icon: BookOpen,
    },
    {
      title: "DCA",
      desc: "Diploma in Computer Applications – Learn MS Office, internet, and basic programming.",
      icon: Laptop,
    },
    {
      title: "ADCA",
      desc: "Advanced Diploma in Computer Applications – Professional-level computer training.",
      icon: Code2,
    },
  ];

  return (
    <section id="courses" className="py-16 bg-background">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6 text-primary">Our Courses</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {courses.map((course, i) => (
            <Card key={i} className="hover:shadow-lg transition-all">
              <CardHeader>
                <div className="flex justify-center mb-3">
                  <course.icon className="h-10 w-10 text-primary" />
                </div>
                <CardTitle>{course.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{course.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
