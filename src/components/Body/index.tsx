/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useState } from 'react';
import ShowMoreText from 'react-show-more-text';

import download from '../../assets/download_icon.svg';
import video from '../../assets/video_profile.svg';

import first_discussions from '../../assets/first_discussions_icon.svg';
import second_discussions from '../../assets/second_discussions_icon.svg';
import third_discussions from '../../assets/third_discussions_icon.svg';
import plus_icon from '../../assets/plus_icon.svg';
import elipses_icon from '../../assets/elipses_icon.svg';
import like_icon from '../../assets/like_icon.svg';
import image_footer from '../../assets/image_footer.svg';
import bold_icon from '../../assets/bold_icon.svg';
import italic_icon from '../../assets/italic_icon.svg';
import done_icon from '../../assets/done_icon.svg';
import star_icon from '../../assets/star_icon.svg';
import doi_icon from '../../assets/doi_icon.svg';

import {
  Container,
  BodyContent,
  BodyTitleContainer,
  BodyTitleIcons,
  DownloadButton,
  VideoContent,
  VideoPlayer,
  VideoFooter,
  Details,
  DetailsContainer,
  Detail,
  Actors,
  Resume,
  ResumeText,
  Discussions,
  DiscussionsContent,
  DiscussionsHeader,
  Subject,
  ContentInput,
  ButtonContainer,
  Content,
  TopicContent,
  FeedbackMessage,
  NewMessageContainer,
  Message,
  Separator,
  AddTopic,
  MessageContainer,
  MessageFooter,
} from './styles';

declare module 'react-show-more-text';

const Body: React.FC = () => {
  const [sendComment, setSendComment] = useState(false);
  const [hasAdd, setHasAdd] = useState(false);

  return (
    <Container>
      <BodyTitleContainer>
        <h1>
          Análise sensorial de preparações funcionais desenvolvidas para
          escolares entre 09 e 15 anos, do município de Campinas/SP
        </h1>
        <BodyTitleIcons>
          <DownloadButton>
            <img src={download} alt="download-icon" />
            <span>Download</span>
          </DownloadButton>
          <img src={star_icon} alt="star-icon" />
          <img src={doi_icon} alt="doi-icon" />
        </BodyTitleIcons>
      </BodyTitleContainer>

      <BodyContent>
        <VideoContent>
          <VideoPlayer>
            <h1>
              Análise sensorial de preparações funcionais desenvolvidas para
              escolares entre 09 e 15 anos, do municio de Campinas/SP
            </h1>
            <VideoFooter>
              <img src={video} alt="video-profile" />
              <div>
                <h1>Beatriz Christiane Melo</h1>
                <span>FCA/Universidade Estadual de Campinas</span>
              </div>
            </VideoFooter>
          </VideoPlayer>

          <Details>
            <h1>Detalhes</h1>
            <DetailsContainer>
              <Detail>
                <span>Tipo de apresentação: </span>
                <strong>Pôster</strong>
              </Detail>
              <Detail>
                <span>Eixo Temático: </span>
                <strong>Alimentação e saúde(AS)</strong>
              </Detail>
              <Detail>
                <span>Palavras-chaves: </span>
                <strong>Alimentos funcionais, alimentação escolar.</strong>
              </Detail>

              <Actors>
                <h1>Autores</h1>
                <span>Galileo Galilei¹</span>
                <span>Berta Lange de Morretes²</span>
                <span>Isaac Newtown³</span>
                <span>Cesar Lattes¹</span>
                <span>Stephen Hawking⁴</span>

                <p>¹Universidade Estadual de Campinas</p>
                <p>²Universidade de São Paulo</p>
                <p>³Instituto Nacional de Pesquisas Espaciais</p>
                <p>⁴Universidade Federal do Rio de Janeiro</p>
                <p>¹Universidade Estadual de Campinas</p>
                <p>²Universidade de São Paulo</p>
                <p>³Instituto Nacional de Pesquisas Espaciais</p>
                <p>⁴Universidade Federal do Rio de Janeiro</p>
                <p>¹Universidade Estadual de Campinas</p>
                <p>²Universidade de São Paulo</p>
                <p>³Instituto Nacional de Pesquisas Espaciais</p>
                <p>⁴Universidade Federal do Rio de Janeiro</p>
              </Actors>
            </DetailsContainer>
          </Details>
        </VideoContent>

        <Resume>
          <h1>Resumo</h1>

          <ResumeText>
            <ShowMoreText
              lines={4}
              more="Show more"
              less="Show less"
              className="content-css"
              anchorClass="my-anchor-css-class"
              expanded={false}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              nunc libero, rhoncus quis sapien et, rhoncus pellentesque justo.
              Etiam posuere lorem in tristique scelerisque. Lorem ipsum dolor
              sit amet, consectetur adipiscing elit. Mauris a tortor dapibus,
              volutpat felis dapibus, vulputate nibh. In eget ligula in purus
              porta mattis nec vitae mauris. Orci varius natoque penatibus et
              magnis dis parturient montes, nascetur ridiculus mus. Suspendisse
              condimentum nisi ac augue hendrerit finibus. Donec turpis magna,
              posuere at erat nec, tincidunt vehicula erat. Nullam eu quam vel
              justo rutrum dapibus. Ut tincidunt semper consectetur. Proin dolor
              urna, tempus et faucibus eu, vestibulum molestie elit. Mauris
              imperdiet eu justo ut pulvinar. Cras feugiat et erat ac rhoncus.
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia curae; Vivamus nec sagittis ante. Vestibulum
              posuere, mauris non tincidunt lacinia, risus orci finibus leo,
              tristique interdum nisi quam eget lectus. Aliquam erat volutpat.
              Nulla pellentesque justo lacus, nec viverra mauris blandit nec.
              Donec sed semper est, et convallis mauris. Quisque libero lorem,
              sollicitudin pharetra lorem a, accumsan pretium ligula.
              Suspendisse non cursus nibh, non feugiat eros. Nullam congue quam
              vitae tortor euismod, vitae fermentum est laoreet. Duis et nibh
              nisi. Vestibulum eu elit ac urna consequat condimentum. Mauris vel
              ornare tortor. Maecenas at elementum sapien, non maximus lacus.
              Nunc dictum magna vitae justo pulvinar pulvinar. In vel imperdiet
              justo. In condimentum sapien ac pretium luctus. Duis convallis
              faucibus arcu, ac ultrices justo congue at. Nam eu ligula est.
              Proin suscipit ex et turpis vehicula, convallis molestie mauris
              iaculis. Morbi risus velit, dapibus at congue vitae, suscipit
              volutpat risus. Proin finibus posuere elit ac pharetra. Donec
              finibus, tellus ac ultrices feugiat, enim ante volutpat justo,
              porta consectetur odio nunc nec velit. Ut aliquet malesuada orci
              sed egestas. Aenean blandit fringilla tellus, vel sodales elit
              bibendum in. Etiam consectetur nisi vel erat interdum sagittis.
              Etiam pellentesque, urna sit amet facilisis pulvinar, purus urna
              pretium tellus, et sollicitudin risus metus non erat. Maecenas id
              convallis neque. Proin vitae molestie ipsum, nec varius nisl.
              Curabitur massa arcu, molestie non interdum feugiat, egestas vel
              elit. Donec in congue ex, vel volutpat ante. Nullam blandit et
              sapien pellentesque lacinia. Aliquam vitae massa nunc. Suspendisse
              maximus condimentum mi quis molestie. Etiam vitae est efficitur,
              volutpat nulla at, vulputate quam.
            </ShowMoreText>
          </ResumeText>
        </Resume>

        <Discussions>
          <h1>Discussões</h1>

          <DiscussionsContent>
            {!hasAdd ? (
              <>
                <DiscussionsHeader>
                  <h1>Compartilhe suas ideias ou dúvidas com os autores!</h1>
                  <div>
                    <img src={first_discussions} alt="first-discussions-icon" />
                    <img
                      src={second_discussions}
                      alt="second-discussions-icon"
                    />
                    <img src={third_discussions} alt="third-discussions-icon" />
                  </div>
                  <h1>
                    Sabia que o maior estímulo no desenvolvimento científico e
                    cultural é a curiosidade? Deixe seus questionamentos ou
                    sugestões para o autor!
                  </h1>
                </DiscussionsHeader>
                <Separator>
                  <AddTopic
                    onClick={() => {
                      setHasAdd(true);
                    }}
                  >
                    <img src={plus_icon} alt="plus-icon" />
                    <span>criar tópico</span>
                  </AddTopic>
                </Separator>
              </>
            ) : (
              <TopicContent>
                <span>
                  Tem uma dúvida ou sugestão? Compartilhe o feedback com os
                  autores
                </span>
                <Subject>
                  <h1>Assunto</h1>
                  <input
                    type="text"
                    placeholder="Defina um tópico sucinto para notificar os autores"
                  />
                </Subject>
                <Content>
                  <h1>Conteúdo</h1>
                  <ContentInput>
                    <input type="text" />
                    <ButtonContainer>
                      <div>
                        <img src={bold_icon} alt="bold-icon" />
                        <img src={italic_icon} alt="italic-icon" />
                      </div>

                      <button
                        type="button"
                        onClick={() => {
                          setHasAdd(false);
                          setSendComment(true);
                        }}
                      >
                        Enviar
                      </button>
                    </ButtonContainer>
                  </ContentInput>
                </Content>
              </TopicContent>
            )}

            {sendComment && (
              <FeedbackMessage>
                <Message>
                  <img src={done_icon} alt="done-icon" />
                  <h1>Aguardando feedback dos autores</h1>
                  <button
                    type="button"
                    onClick={() => {
                      setSendComment(false);
                    }}
                  >
                    Editar Tópico
                  </button>
                </Message>
                <NewMessageContainer>
                  <h1>Assunto da sua pergunta aparece aqui</h1>
                  <span>Carlos Henrique Santos</span>
                  <p>
                    Comecinho da pergunta aparece aqui resente relato
                    inscreve-se no campo da análise da dimensão e impacto de
                    processo formativo situado impacto de processo formativo
                    processo...
                  </p>
                  <MessageFooter>
                    <img src={elipses_icon} alt="elipses-icon" />
                    <img src={like_icon} alt="like-icon" />
                    <span>1 like</span>
                    <span>1 resposta</span>
                  </MessageFooter>
                </NewMessageContainer>
              </FeedbackMessage>
            )}

            <MessageContainer>
              <h1>Assunto da sua pergunta aparece aqui</h1>
              <span>Carlos Henrique Santos</span>
              <p>
                Comecinho da pergunta aparece aqui resente relato inscreve-se no
                campo da análise da dimensão e impacto de processo formativo
                situado impacto de processo formativo processo...
              </p>
              <MessageFooter>
                <img src={elipses_icon} alt="elipses-icon" />
                <img src={like_icon} alt="like-icon" />
                <span>1 like</span>
                <span>1 resposta</span>
              </MessageFooter>
            </MessageContainer>

            <MessageContainer>
              <h1>Assunto da sua pergunta aparece aqui</h1>
              <span>Carlos Henrique Santos</span>
              <p>
                Comecinho da pergunta aparece aqui resente relato inscreve-se no
                campo da análise da dimensão e impacto de processo formativo
                situado impacto de processo formativo processo...
              </p>
              <MessageFooter>
                <img src={elipses_icon} alt="elipses-icon" />
                <img src={like_icon} alt="like-icon" />
                <span>1 like</span>
                <span>1 resposta</span>
              </MessageFooter>
            </MessageContainer>
          </DiscussionsContent>
        </Discussions>
        <Separator />
        <img src={image_footer} alt="like_icon" />
      </BodyContent>
    </Container>
  );
};

export default Body;
