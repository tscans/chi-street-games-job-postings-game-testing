import { Button } from "./components/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./components/card";
import { Badge } from "./components/badge";
import {
  Gamepad2,
  MapPin,
  DollarSign,
  Clock,
  Users,
  Briefcase,
  Building,
  Sparkles,
} from "lucide-react";

export default function JobPosting() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white py-12 px-4 sm:px-6 lg:px-8">
      <Card className="max-w-4xl mx-auto bg-gray-800 text-white border-purple-500">
        <CardHeader className="border-b border-purple-500 pb-6">
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-3xl font-bold text-purple-400">
                Junior Game Tester
              </CardTitle>
              <CardDescription className="text-gray-400 mt-1">
                Chi-Street Games
              </CardDescription>
            </div>
            <Gamepad2 className="h-12 w-12 text-purple-400" />
          </div>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="flex items-center">
              <MapPin className="h-5 w-5 mr-2 text-purple-400" />
              <span>Remote (Chicago based)</span>
            </div>
            <div className="flex items-center">
              <DollarSign className="h-5 w-5 mr-2 text-purple-400" />
              <span>$140,000 - $155,000</span>
            </div>
            <div className="flex items-center">
              <Clock className="h-5 w-5 mr-2 text-purple-400" />
              <span>Full-time</span>
            </div>
            <div className="flex items-center">
              <Users className="h-5 w-5 mr-2 text-purple-400" />
              <span>Join a team of 10-15</span>
            </div>
          </div>

          <h3 className="text-xl font-semibold mb-2 text-purple-400">
            About the Role
          </h3>
          <p className="mb-4">
            Are you passionate about video games and have a keen eye for detail?
            Chi-Street Games is seeking enthusiastic Junior Game Testers to join
            our growing QA team. This is an excellent opportunity to break into
            the game industry and contribute to the development of exciting
            video games. We believe we are working on the next Halo.
          </p>

          <h3 className="text-xl font-semibold mb-2 text-purple-400">
            Key Responsibilities
          </h3>
          <ul className="list-disc list-inside mb-4 space-y-2">
            <li>
              Play through games meticulously to identify bugs, glitches, and
              inconsistencies
            </li>
            <li>
              Document and report issues clearly and concisely using our bug
              tracking system
            </li>
            <li>Verify fixes and retest areas of the game as needed</li>
            <li>
              Provide feedback on game mechanics, user experience, and overall
              gameplay
            </li>
            <li>
              Collaborate with developers and other testers to ensure
              high-quality releases
            </li>
          </ul>

          <h3 className="text-xl font-semibold mb-2 text-purple-400">
            Requirements
          </h3>
          <ul className="list-disc list-inside mb-4 space-y-2">
            <li>Passion for video games and a critical eye for detail</li>
            <li>
              Experience playing a variety of game genres, especially FPS games
              like Halo and Call of Duty
            </li>
            <li>Basic understanding of the game development process</li>
            <li>Strong written and verbal communication skills</li>
            <li>
              Ability to work independently and as part of a team in a remote
              environment
            </li>
            <li>Familiarity with PC gaming setups and troubleshooting</li>
            <li>
              High school diploma or equivalent (some college experience is a
              plus)
            </li>
          </ul>

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2 text-purple-400">
              Preferred Skills
            </h3>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">FPS Games</Badge>
              <Badge variant="secondary">PC Gaming</Badge>
              <Badge variant="secondary">Console Gaming</Badge>
              <Badge variant="secondary">Bug Tracking Tools</Badge>
              <Badge variant="secondary">Game Mods</Badge>
            </div>
          </div>

          <div className="bg-gray-700 p-4 rounded-lg mb-6">
            <h3 className="text-xl font-semibold mb-2 flex items-center text-purple-400">
              <Building className="h-5 w-5 mr-2" />
              About Chi-Street Games
            </h3>
            <p>
              Chi-Street Games is an up-and-coming independent game studio
              that's making waves in the urban gaming scene. Based in Chicago
              but with a distributed team, we're dedicated to creating
              immersive, story-driven games that capture the essence of city
              life and culture. Our passionate team is committed to delivering
              unforgettable gaming experiences that resonate with players around
              the world.
            </p>
          </div>

          <div className="bg-gray-700 p-4 rounded-lg">
            <h3 className="text-xl font-semibold mb-2 flex items-center text-purple-400">
              <Sparkles className="h-5 w-5 mr-2" />
              Why Join Us?
            </h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Kickstart your career in the gaming industry</li>
              <li>
                Work on exciting projects that shape the future of urban gaming
              </li>
              <li>Flexible remote work environment</li>
              <li>
                Mentorship and learning opportunities from experienced game
                developers
              </li>
              <li>
                Competitive salary and benefits package for entry-level position
              </li>
              <li>Regular virtual team building events and game nights</li>
            </ul>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between items-center border-t border-purple-500 pt-6">
          <div className="flex items-center">
            <Briefcase className="h-5 w-5 mr-2 text-purple-400" />
            <span>Apply by: October 31, 2024</span>
          </div>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLScARWvDh630yiPew6mz-I_snYmuDiZ1n7YmfMy5IWeqICzJJA/viewform?usp=sf_link">
            <Button className="bg-purple-600 hover:bg-purple-700">
              Apply Now
            </Button>
          </a>
        </CardFooter>
      </Card>
    </div>
  );
}
