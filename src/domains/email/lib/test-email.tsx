import {
  Body,
  Button,
  Column,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";
import { render, toPlainText } from "@react-email/render";
import type { EmailType } from "@/domains/email/types";

async function getTestEmail() {
  const testEmailHtml = await render(<GenericWelcomeEmail />);

  const testEmail: EmailType = {
    subject: "Welcome to Our Service",
    from: "onboarding@example.com",
    to: "test@example.com",
    html: testEmailHtml,
    text: toPlainText(testEmailHtml),
  };

  return testEmail;
}

function GenericWelcomeEmail() {
  return (
    <Html>
      <Head />
      <Tailwind
        config={{
          theme: {
            extend: {
              colors: {
                brand: "#2563eb",
                offwhite: "#f9fafb",
              },
              spacing: {
                0: "0px",
                20: "20px",
                45: "45px",
              },
            },
          },
        }}
      >
        <Preview>Welcome to Our Service</Preview>
        <Body className="bg-offwhite font-sans text-base">
          <Container className="bg-white p-45 mt-20">
            <Img
              src="https://placehold.co/180x60?text=Your+Logo"
              width="180"
              height="60"
              alt="Company Logo"
              className="mx-auto mb-20"
            />

            <Heading className="my-0 text-center leading-8">
              Welcome to Our Service!
            </Heading>

            <Section>
              <Text className="text-base mt-4">
                We're thrilled to have you on board. Here are a few quick steps
                to help you get started:
              </Text>
              <ul className="list-disc pl-5 mt-4">
                <li>
                  <strong>Explore your dashboard.</strong> See your latest
                  updates and insights at a glance.
                </li>
                <li>
                  <strong>Customize your profile.</strong> Make your account
                  truly yours by updating your information and preferences.
                </li>
                <li>
                  <strong>Get support.</strong> Need help? Our team is here to
                  assist you anytime.
                </li>
              </ul>
            </Section>

            <Section className="text-center mt-8">
              <Button className="rounded-lg bg-brand px-[18px] py-3 text-white">
                Go to Dashboard
              </Button>
            </Section>

            <Section className="mt-45">
              <Row className="text-center">
                <Column>
                  <Link
                    className="font-bold text-black underline"
                    href="https://example.com/help"
                  >
                    Help Center
                  </Link>
                </Column>
                <Column>
                  <Link
                    className="font-bold text-black underline"
                    href="https://example.com/docs"
                  >
                    Documentation
                  </Link>
                </Column>
                <Column>
                  <Link
                    className="font-bold text-black underline"
                    href="https://example.com/contact"
                  >
                    Contact Us
                  </Link>
                </Column>
              </Row>
            </Section>
          </Container>

          <Container className="mt-20 text-center text-gray-400 text-sm">
            <Text>
              You’re receiving this email because you signed up for our service.
            </Text>
            <Row className="justify-center mt-4">
              <Column className="px-4">
                <Link href="https://example.com/unsubscribe">Unsubscribe</Link>
              </Column>
              <Column className="px-4">
                <Link href="https://example.com/preferences">
                  Manage Preferences
                </Link>
              </Column>
            </Row>
            <Text className="mt-6">
              © 2025 Your Company, 123 Main Street, City, Country
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}

export { getTestEmail };
