import Account from './Account';
export default function Header(props) {
	return (
		<>
			<header>
				<a className="logo" href="/">
					<svg version="1.1" id="Logo" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 130.5 48"
						xmlSpace="preserve" width="87" height="32">

						<path
							d="M53.7 26.1V12.5h5.7v13.8c0 2.3 1.2 3.8 4 3.8 2.6 0 3.9-1.6 3.9-3.9V12.5H73v13.6c0 5.3-3.2 8.5-9.6 8.5-6.5.1-9.7-3.1-9.7-8.5zM75.6 17.7h5.1V20h.1c1.2-1.8 2.8-2.7 5.1-2.7 3.6 0 5.7 2.6 5.7 6.3v10.7h-5.3v-9.7c0-1.7-.9-2.9-2.6-2.9-1.7 0-2.9 1.5-2.9 3.5v9.1h-5.3V17.7zM94.3 11.2h5.3v4.3h-5.3v-4.3zm0 6.5h5.3v16.5h-5.3V17.7zM103.7 29.9V22h-2.2v-4.3h2.2v-5.2h5.1v5.2h3V22h-3v6.8c0 1.3.7 1.6 1.8 1.6h1.2v3.8c-.5.1-1.5.3-2.9.3-3 0-5.2-1-5.2-4.6zM115.1 35.6h1.8c1.5 0 2.2-.6 2.2-1.7 0-.7-.3-1.7-1-3.4l-4.9-12.7h5.5l2.2 7c.5 1.6 1 3.8 1 3.8h.1s.5-2.2 1-3.8l2.2-7h5.3l-5.7 16.7c-1.3 3.9-2.9 5.2-6.2 5.2h-3.4l-.1-4.1z">
						</path>
						<path className="st0"
							d="M42.5 33.6V11.2L23.1 0v8.6l7.6 4.4c.3.2.3.6 0 .7l-9 5.2c-.3.2-.6.1-.8 0l-9-5.2c-.3-.1-.3-.6 0-.7l7.6-4.4V0L0 11.2v22.4-.1.1l7.4-4.3v-8.8c0-.3.4-.5.6-.4l9 5.2c.3.2.4.4.4.7v10.4c0 .3-.4.5-.6.4l-7.6-4.4-7.4 4.3L21.2 48l19.4-11.2-7.4-4.3-7.6 4.4c-.3.2-.6 0-.6-.4V26.1c0-.3.2-.6.4-.7l9-5.2c.3-.2.6 0 .6.4v8.8l7.5 4.2z">
						</path>
						<path
							d="M21.2 48l19.4-11.2-7.4-4.3-7.6 4.4c-.3.2-.6 0-.6-.4V26.1c0-.3.2-.6.4-.7l9-5.2c.3-.2.6 0 .6.4v8.8l7.4 4.3V11.2L21.2 23.5V48z">
						</path>
						<path
							d="M23.1 0v8.6l7.6 4.4c.3.2.3.6 0 .7l-9 5.2c-.3.2-.6.1-.8 0l-9-5.2c-.3-.1-.3-.6 0-.7l7.6-4.4V0L0 11.2l21.2 12.3 21.2-12.3L23.1 0z"
							fill="gray"></path>
						<path className="st0"
							d="M16.9 36.9l-7.6-4.4-7.4 4.3L21.3 48V23.5L0 11.2v22.4-.1.1l7.4-4.3v-8.8c0-.3.4-.5.6-.4l9 5.2c.3.2.4.4.4.7v10.4c.1.4-.2.7-.5.5z">
						</path>
					</svg>
				</a>
				<div className="header-mid-container">
					<div tabIndex={1} className="barButton display-none">
						<div className="barButton-line"></div>
						<div className="barButton-line"></div>
						<div className="barButton-line"></div>
					</div>
					<div className="side-menu display-none">
						<span>
							<a href="/">Produtos</a>
							<div>
								<a href="/">Unity Pro</a>
								<a href="/">Unity Industrial Collection</a>
								<a href="/">Unity Enterprise</a>
								<a href="/">Unity Ads</a>
								<a href="/">Unity Reflect</a>
								<a href="/">Pixyz</a>
								<a href="/">Veja todos os produtos</a>
							</div>
							<a href="/">Solu????es</a>
							<div>
								<a href="/">Jogos</a>
								<a href="/">Digital Twins</a>
								<a href="/">Automotivo, Transporte e Manufatura</a>
								<a href="/">Filme, anima????o e cinem??ticas</a>
								<a href="/">Arquitetura, Engenharia e Constru????o</a>
								<a href="/">Governo e Aeroespa??o</a>
								<a href="/">Jogos de azar</a>
								<a href="/">Solu????es de acelera????o</a>
								<a href="/">Estudos de caso</a>
							</div>
							<a href="/">Aprendizado</a>
							<div>
								<a href="/">Estudantes</a>
								<a href="/">Educadores</a>
								<a href="/">Profissionais</a>
								<a href="/">Aprenda o Unity</a>
							</div>
							<a href="/">Suporte e servi??os</a>
							<div>
								<a href="/">Atendimento ao consumidor</a>
								<a href="/">Suporte t??cnico</a>
								<a href="/">Servi??os de consultoria</a>
								<a href="/">Treinamento profissional</a>
							</div>
							<a href="/">Comunidade</a>
							<div>
								<a href="/">Blog</a>
								<a href="/">F??runs</a>
								<a href="/">Respostas</a>
								<a href="/">Porta-vozes</a>
								<a href="/">Grupos de Usu??rios</a>
								<a href="/">Programa beta</a>
								<a href="/">Unity Pulse</a>
								<a href="/">Eventos</a>
								<a href="/">Criador em destaque</a>
							</div>
							<a href="/">Ferramentas de desenvolvedor</a>
							<div>
								<a href="/">Baixe o Unity</a>
								<a href="/">Asset Store</a>
								<a href="/">Vers??es</a>
								<a href="/">Roteiro</a>
								<a href="/">Documenta????o</a>
								<a href="/">Base de Conhecimento</a>
								<a href="/">Gloss??rio industrial</a>
								<a href="/">Gest??o de problemas</a>
								<a href="/">Ajuda ao vivo</a>
							</div>
							<hr />
						</span>
						<div className="comece">
							<a href="/">Comece</a>
						</div>
					</div>
					<div className="header-mid">
						<div className="a-container">
							<a href="/">Produtos</a>
							<div className="hided-content">
								<div className="content">
									<li>
										<a href="/">Unity Pro
											<div className="a-side-hided-content display-none">
												<h1>Unity Pro</h1>
												<p> A solu????o completa para que profissionais possam criar e operar experi??ncias
													3D
													em tempo real.
												</p>
											</div>
										</a>
									</li>
									<li>
										<a href="/">Unity Industrial Collection
											<div className="a-side-hided-content display-none">
												<h1>Unity Industrial Collection</h1>
												<p>Leve dados CAD e 3D para AR, VR e muito mais com ferramentas de visualiza????o
													de produtos 3D em tempo real.
												</p>
											</div>
										</a>
									</li>
									<li>
										<a href="/">Unity Enterprise
											<div className="a-side-hided-content display-none">
												<h1>Unity Enterprise</h1>
												<p> Leve dados CAD e 3D para AR, VR e muito mais com ferramentas de visualiza????o
													de produtos 3D em tempo real.
												</p>
											</div>
										</a>
									</li>
									<li>
										<a href="/">Unity Ads
											<div className="a-side-hided-content display-none">
												<h1>Unity Ads</h1>
												<p> Solu????es de monetiza????o e aquisi????o de usu??rios para apoiar suas metas de
													receita e crescimento.
												</p>
											</div>
										</a>
									</li>
									<li>
										<a href="/">Unity Reflect
											<div className="a-side-hided-content display-none">
												<h1>Unity Reflect</h1>
												<p>Uma su??te de produtos para a cria????o de experi??ncias 3D em tempo real,
													inclusive em AR e VR, a partir de modelos BIM, permitindo uma tomada de
													decis??es mais impactante.
												</p>
											</div>
										</a>
									</li>
									<li>
										<a href="/">Pixyz
											<div className="a-side-hided-content display-none">
												<h1>Pixyz Plugin</h1>
												<p> Importe, prepare e otimize rapidamente grandes modelos de CAD, malha e
													nuvens de pontos para visualiza????es em tempo real no Unity.
												</p>
											</div>
										</a>
									</li>
									<li>
										<a href="/">Veja todos os produtos
											<div className="a-side-hided-content display-none">
												<h1>Descubra mais ferramentas, produtos e solu????es</h1>
												<p>Estenda o poder da principal plataforma de cria????o e opera????o de conte??do
													interativo 3D
													em tempo real do mundo. </p>
											</div>
										</a>
									</li>
									<div className="a-side-hided-content">
										<h1>Descubra mais ferramentas, produtos e solu????es</h1>
										<p>Estenda o poder da principal plataforma de cria????o e opera????o de conte??do
											interativo 3D
											em tempo real do mundo </p>
									</div>
								</div>

							</div>
						</div>
						<div className="a-container">
							<a href="/">Solu????es</a>
							<div className="hided-content">
								<div className="content">
									<li>
										<a href="/">Jogos
											<div className="a-side-hided-content display-none">
												<h1>Do conceito ?? comercializa????o</h1>
												<p> Todos os recursos de que voc?? precisa para criar, lan??ar e ter sucesso com
													jogos instant??neos, para dispositivos m??veis, para console/PC e AR/VR.
												</p>
											</div>
										</a>
									</li>
									<li>
										<a href="/">Digital Twins
											<div className="a-side-hided-content display-none">
												<h1>Visualize data in a new dimension</h1>
												<p>Experience and interact with your data in real-time 3D to make informed
													decisions across the creation and operation of real-world assets.
												</p>
											</div>
										</a>
									</li>
									<li>
										<a href="/">Automotivo, Transporte e Manufatura
											<div className="a-side-hided-content display-none">
												<h1>Solu????es virtuais para aplica????es em tempo real</h1>
												<p> Obtenha uma vantagem competitiva com a nossa plataforma 3D em tempo real ???
													ideal para um cen??rio de r??pida evolu????o da ind??stria.
												</p>
											</div>
										</a>
									</li>
									<li>
										<a href="/">Filme, anima????o e cinem??ticas
											<div className="a-side-hided-content display-none">
												<h1>Tomando conta do setor</h1>
												<p> Unity fornece liberdade art??stica sem precedentes e produ????o mais r??pida
													para filmes e projetos de anima????o.
												</p>
											</div>
										</a>
									</li>
									<li>
										<a href="/">Arquitetura, Engenharia & Constru????o
											<div className="a-side-hided-content display-none">
												<h1>Acelera????o da inova????o em AEC</h1>
												<p>Crie experi??ncias imersivas e interativas para VR (Realidade Virtual, em
													ingl??s Virtual Reality), AR (Realidade Aumentada, em ingl??s Augmented
													Reality), dispositivos m??veis que ganham contratos, otimizam seus fluxos de
													trabalho e reduzem os custos.
												</p>
											</div>
										</a>
									</li>
									<li>
										<a href="/">Governo e Aeroespa??o
											<div className="a-side-hided-content display-none">
												<h1>Promova a inova????o, alcance novos patamares</h1>
												<p> Transforme o treinamento e a simula????o em uma vantagem t??tica com 3D em
													tempo real, realidade estendida (XR) e IA.
												</p>
											</div>
										</a>
									</li>
									<li>
										<a href="/">Jogos de azar
											<div className="a-side-hided-content display-none">
												<h1>
													Ofere??a jogos empolgantes com dinheiro real para jogadores do mundo todo
												</h1>
												<p>Um conjunto de ferramentas ideal para a cria????o de jogos de apostas e casino
													atraentes para qualquer espa??o f??sico, online ou dispositivo m??vel.
												</p>
											</div>
										</a>
									</li>
									<li>
										<a href="/">Solu????es de acelera????o
											<div className="a-side-hided-content display-none">
												<h1>
													Solu????es de acelera????o para empresas
												</h1>
												<p>Solu????es de tecnologia personalizadas da Unity que permitem que as empresas
													inovem mais r??pido.
												</p>
											</div>
										</a>
									</li>
									<li>
										<a href="/">Estudos de caso
											<div className="a-side-hided-content display-none">
												<h1>
													Explore uma cole????o de estudos de caso que destacam tudo que ?? feito com
													Unity
												</h1>
												<p>Encontre estudos de caso detalhados sobre como criadores, est??dios e ag??ncias
													do mundo todo d??o vida ?? imagina????o com o Unity.
												</p>
											</div>
										</a>
									</li>
									<div className="a-side-hided-content">
										<h1>Solu????es em tempo real, oportunidades sem fim</h1>
										<p>A plataforma de desenvolvimento em tempo real e flex??vel do Unity oferece
											possibilidades incr??veis para todas as ind??strias e aplica????es. </p>
									</div>
								</div>

							</div>
						</div>
						<div className="a-container">
							<a href="/">Aprendizado</a>
							<div className="hided-content">
								<div className="content">
									<li>
										<a href="/">Estudantes
											<div className="a-side-hided-content display-none">
												<h1>Desenvolva habilidades em Unity mais r??pido e f??cil do que nunca</h1>
												<p>Seja iniciante ou especialista, profissional ou estudante, aqui voc??
													encontrar?? todos os recursos necess??rios para sua jornada de aprendizado do
													Unity.</p>
											</div>
										</a>
									</li>
									<li>
										<a href="/">Educadores
											<div className="a-side-hided-content display-none">
												<h1>Prepare os seus alunos para os empregos do futuro</h1>
												<p>Traga o Unity para a sala de aula com recursos gratuitos e curr??culo para
													ensinar seus alunos a criar experi??ncias interativas em 2D, 3D, AR e VR.
												</p>
											</div>
										</a>
									</li>
									<li>
										<a href="/">Profissionais
											<div className="a-side-hided-content display-none">
												<h1>Treinamento profissional</h1>
												<p> O Treinamento profissional aumenta a produtividade e melhora os fluxos de
													trabalho por meio de cursos ministrados por Instrutores Certificados Unity.
													Esses cursos ensinam profissionais e equipes a criar t??cnicas ideais e
													melhorar a otimiza????o por meio das ferramentas do Unity.
												</p>
											</div>
										</a>
									</li>
									<li>
										<a href="/">Aprenda o Unity
											<div className="a-side-hided-content display-none">
												<h1>Comece a aprender</h1>
												<p> Aprimore suas habilidades em Unity com tutoriais premiados, projetos
													pr??ticos e cursos aprofundados. Acesse mais de 750 horas de conte??do de
													aprendizagem sob demanda e sess??es de aprendizagem ao vivo para criadores de
													todos os n??veis de habilidade.
												</p>
											</div>
										</a>
									</li>

									<div className="a-side-hided-content">
										<h1>Desenvolva habilidades em Unity mais r??pido e f??cil do que nunca</h1>
										<p>Seja iniciante ou especialista, profissional ou estudante, aqui voc?? encontrar?? todos
											os recursos necess??rios para sua jornada de aprendizado do Unity.</p>
									</div>
								</div>

							</div>
						</div>
						<div className="a-container">
							<a href="/">Suporte e servi??os</a>
							<div className="hided-content">
								<div className="content">
									<li>
										<a href="/">Atendimento ao consumidor
											<div className="a-side-hided-content display-none">
												<h1>Atendimento ao consumidor</h1>
												<p> Obtenha assist??ncia para quest??es n??o t??cnicas, como ativa????es de contas,
													erros no Hub ou consultas de faturamento.
												</p>
											</div>
										</a>
									</li>
									<li>
										<a href="/">Suporte t??cnico
											<div className="a-side-hided-content display-none">
												<h1>Suporte t??cnico</h1>
												<p>Para problemas t??cnicos de todas as complexidades, acesse uma variedade de
													op????es de suporte premium gratuitas e pagas.
												</p>
											</div>
										</a>
									</li>
									<li>
										<a href="/">Servi??os de consultoria
											<div className="a-side-hided-content display-none">
												<h1>Servi??os de consultoria</h1>
												<p> Desde uma simples consulta at?? um esfor??o de desenvolvimento completo,
													obtenha a experi??ncia necess??ria para levar seu projeto ao pr??ximo n??vel.
												</p>
											</div>
										</a>
									</li>
									<li>
										<a href="/">Treinamento profissional
											<div className="a-side-hided-content display-none">
												<h1>Treinamento profissional</h1>
												<p> Melhore as habilidades da sua equipe, aumente a produtividade e melhore os
													fluxos de trabalho com cursos de treinamento ministrados por Instrutores
													Certificados Unity.
												</p>
											</div>
										</a>
									</li>
									<div className="a-side-hided-content">
										<h1>Encontre o suporte e os servi??os de que voc?? precisa</h1>
										<p>Mantenha seu projeto em dire????o ?? meta final. Acesse todo o suporte e servi??os de que
											voc?? precisa para ter sucesso.</p>
									</div>
								</div>

							</div>
						</div>
						<div className="a-container">
							<a href="/">Comunidade</a>
							<div className="hided-content">
								<div className="content">
									<li>
										<a href="/">Blog
											<div className="a-side-hided-content display-none">
												<h1>Este ?? o pulso do Unity</h1>
												<p>Leia tudo aqui primeiro. N??o perca os ??ltimos recursos, an??ncios, conquistas
													de criadores, dicas e truques, e muito mais.
												</p>
											</div>
										</a>
									</li>
									<li>
										<a href="/">F??runs
											<div className="a-side-hided-content display-none">
												<h1>Participe da discuss??o</h1>
												<p>Publique perguntas, encontre respostas, veja projetos incr??veis, conhe??a seus
													colegas ou at?? mesmo encontre algu??m para ajudar em seu projeto ou sua
													equipe.
												</p>
											</div>
										</a>
									</li>
									<li>
										<a href="/">Respostas
											<div className="a-side-hided-content display-none">
												<h1>Junte-se a n??s para algumas perguntas e respostas</h1>
												<p> Iniciantes e especialistas contribuem, ajudando uns aos outros com Unity. O
													sistema de vota????o integrado direciona voc?? para as melhores respostas com
													rapidez.
												</p>
											</div>
										</a>
									</li>
									<li>
										<a href="/">Porta-vozes
											<div className="a-side-hided-content display-none">
												<h1>Espalhando informa????es sobre o Unity no mundo todo</h1>
												<p> Os porta-vozes da Unity ajudam a comunidade de criadores em tempo real a
													florescer por meio da produ????o de exemplos de projetos e do compartilhamento
													de sua paix??o e seu conhecimento.
												</p>
											</div>
										</a>
									</li>
									<li>
										<a href="/">Grupos de Usu??rios
											<div className="a-side-hided-content display-none">
												<h1>Junte-se a um grupo de usu??rios perto de voc??</h1>
												<p>Conhe??a seus colegas em um grupo de usu??rios local e compartilhe suas
													experi??ncias com o Unity. E, se n??o conseguir encontrar um grupo por perto,
													considere come??ar o seu. ?? f??cil.
												</p>
											</div>
										</a>
									</li>
									<li>
										<a href="/">Programa beta
											<div className="a-side-hided-content display-none">
												<h1>Acesse os ??ltimos recursos antes que sejam oficialmente lan??ados</h1>
												<p> Esteja entre os primeiros a conferir os recursos que ser??o lan??ados na
													pr??xima vers??o completa, teste seu projeto para compatibilidade e participe
													de uma comunidade de usu??rios que moldam o futuro do Unity.
												</p>
											</div>
										</a>
									</li>
									<li>
										<a href="/">Unity Pulse
											<div className="a-side-hided-content display-none">
												<h1>Forne??a feedback para a equipe do Unity</h1>
												<p>Fa??a sua voz ser ouvida ao se tornar membro da Unity Pulse. Adorar??amos saber
													o que voc?? pensa sobre os produtos, as mensagens e os recursos do Unity.</p>
											</div>
										</a>
									</li>
									<li>
										<a href="/">Eventos
											<div className="a-side-hided-content display-none">
												<h1>Junte-se a n??s em um evento perto de voc??</h1>
												<p>No mundo todo, a comunidade Unity se re??ne para compartilhar o que
													aprendemos, aquilo em que estamos trabalhando e como voc?? pode avan??ar seu
													projeto usando Unity. Encontre um evento perto de voc??. </p>
											</div>
										</a>
									</li>
									<li>
										<a href="/">Criador em destaque
											<div className="a-side-hided-content display-none">
												<h1>Destacando jogos incr??veis feitos com Unity</h1>
												<p>Nossa s??rie Criador em destaque de transmiss??es na Twitch apresenta jogos
													inovadores e inspiradores feitos com Unity e leva voc?? para os bastidores
													com as equipes e a tecnologia que d??o vida a eles. </p>
											</div>
										</a>
									</li>
									<div className="a-side-hided-content">
										<h1>Encontre as suas pessoas</h1>
										<p>Obtenha ajuda e discuta solu????es com os experientes usu??rios Unity. Compartilhe o seu
											conhecimento. Compartilhe a sua paix??o.</p>
									</div>
								</div>

							</div>
						</div>
						<div className="a-container">
							<a href="/">Mais</a>
							<div className="hided-content-more">
								<div className="content">
									<li>
										<div tabIndex={1} id="more">
											Ferramentas de desenvolvedor
											<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
												<path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" fill="currentColor"></path>
												<path fill="none" d="M0 0h24v24H0V0z"></path>
											</svg>
										</div>
										<div className="more-content">
											<a href="/">Baixe o Unity</a>
											<a href="/">Asset Store</a>
											<a href="/">Vers??es</a>
											<a href="/">Roteiro</a>
											<a href="/">Documenta????o</a>
											<a href="/">Base de Conhecimento</a>
											<a href="/">Gloss??rio industrial</a>
											<a href="/">Gest??o de problemas</a>
											<a href="/">Ajuda ao vivo</a>
										</div>
									</li>
								</div>
							</div>
						</div>
					</div>
				</div>
				<Account {...props} />
			</header>
		</>
	);
}