import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Tailwind,
  Text,
} from "@react-email/components";

const EmailTemplate = ({ email, subject, content }) => {
  const previewText = `${email} has a message`;

  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>
      <Tailwind>
        <Body className="bg-white my-auto mx-auto font-sans">
          <Container className="border border-solid border-[#eaeaea] rounded my-[40px] mx-auto p-[20px] w-[465px]">
            <Heading className="text-black text-[24px] font-normal text-center p-0 my-[30px] mx-0">
              <strong>{email}</strong> would like to contact you !
            </Heading>

            <Text className="text-black text-[14px] leading-[16px]">
              About: {subject}
            </Text>
            <Text className="text-black text-[14px] leading-[16px]">
              Here is the message:
            </Text>

            <Text className="text-black text-[14px] leading-[16px]">
              {content}
            </Text>

            <Hr className="border border-solid border-[#eaeaea] my-[26px] mx-0 w-full" />
            <Text className="text-[#666666] text-[12px] leading-[24px]">
              This message was sent by {email}.
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default EmailTemplate;
